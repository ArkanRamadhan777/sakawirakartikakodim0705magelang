import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { checkUserAchievements, checkLeaderboardAchievement } from '../services/achievementService';
import { achievements } from '../data/achievements';
import AchievementBadge from '../components/AchievementBadge';
import { Trophy, Award, Star, Target } from 'lucide-react';

const AchievementsPage = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [userAchievements, setUserAchievements] = useState([]);
  const [stats, setStats] = useState(null);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
    loadAchievements();
  }, [currentUser]);
  
  const loadAchievements = async () => {
    setLoading(true);
    
    // Check regular achievements
    const result = await checkUserAchievements(currentUser.uid);
    
    // Check leaderboard achievements
    const leaderboardResult = await checkLeaderboardAchievement(currentUser.uid);
    
    if (result.success) {
      let allUnlocked = result.achievements;
      
      if (leaderboardResult.success) {
        allUnlocked = [...allUnlocked, ...leaderboardResult.achievements];
        // Remove duplicates
        allUnlocked = allUnlocked.filter((a, index, self) =>
          index === self.findIndex((t) => t.id === a.id)
        );
      }
      
      setUserAchievements(allUnlocked);
      setStats(result.stats);
      setProgress((allUnlocked.length / achievements.length) * 100);
    }
    
    setLoading(false);
  };
  
  const unlockedIds = new Set(userAchievements.map(a => a.id));
  
  // Group achievements by category
  const categories = [
    {
      name: 'Penyelesaian Quiz',
      achievements: achievements.filter(a => a.requirement.type === 'quizCount')
    },
    {
      name: 'Pencapaian Skor',
      achievements: achievements.filter(a => a.requirement.type === 'totalScore')
    },
    {
      name: 'Perfect Score',
      achievements: achievements.filter(a => a.requirement.type === 'perfectScore')
    },
    {
      name: 'Kecepatan',
      achievements: achievements.filter(a => a.requirement.type === 'fastCompletion')
    },
    {
      name: 'Akurasi',
      achievements: achievements.filter(a => a.requirement.type === 'accuracy')
    },
    {
      name: 'Leaderboard',
      achievements: achievements.filter(a => a.requirement.type === 'leaderboardRank')
    }
  ];
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-yellow-500" size={40} />
            <h1 className="text-4xl font-bold font-anta text-gray-900">
              Pencapaian
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Koleksi badge dan pencapaian Anda
          </p>
        </div>
        
        {/* Progress Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {/* Total Achievements */}
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">
                {userAchievements.length}/{achievements.length}
              </div>
              <div className="text-sm text-gray-600">Achievement Terbuka</div>
            </div>
            
            {/* Quiz Count */}
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stats?.quizCount || 0}
              </div>
              <div className="text-sm text-gray-600">Quiz Selesai</div>
            </div>
            
            {/* Total Score */}
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {stats?.totalScore?.toFixed(0) || 0}
              </div>
              <div className="text-sm text-gray-600">Total Skor</div>
            </div>
            
            {/* Perfect Scores */}
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">
                {stats?.perfectScores || 0}
              </div>
              <div className="text-sm text-gray-600">Perfect Score</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progress</span>
              <span>{progress.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-primary to-red-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Achievements by Category */}
        {categories.map((category) => (
          <div key={category.name} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Award size={24} className="text-primary" />
              {category.name}
            </h2>
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.achievements.map((achievement) => (
                  <div key={achievement.id} className="flex justify-center">
                    <AchievementBadge
                      achievement={achievement}
                      unlocked={unlockedIds.has(achievement.id)}
                      size="md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Empty State */}
        {userAchievements.length === 0 && (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Belum Ada Achievement
            </h3>
            <p className="text-gray-600 mb-6">
              Mulai kerjakan quiz untuk membuka achievement pertamamu!
            </p>
            <button
              onClick={() => navigate('/krida')}
              className="btn btn-primary"
            >
              Mulai Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsPage;
