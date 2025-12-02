import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, TrendingUp, RefreshCw } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { getPersonalizedRecommendations } from '../services/recommendationService';
import LoadingSpinner from './LoadingSpinner';

const RecommendationsWidget = ({ limit = 3 }) => {
  const { currentUser } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser) {
      loadRecommendations();
    } else {
      setLoading(false);
    }
  }, [currentUser]);

  const loadRecommendations = async () => {
    setLoading(true);
    const result = await getPersonalizedRecommendations(currentUser.uid);
    if (result.success) {
      setRecommendations(result.recommendations.slice(0, limit));
    }
    setLoading(false);
  };

  if (!currentUser || loading) {
    return null;
  }

  if (recommendations.length === 0) {
    return null;
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'border-l-4 border-red-500 bg-red-50';
      case 'medium':
        return 'border-l-4 border-yellow-500 bg-yellow-50';
      case 'low':
        return 'border-l-4 border-green-500 bg-green-50';
      default:
        return 'border-l-4 border-gray-500 bg-gray-50';
    }
  };

  const getActionLink = (rec) => {
    switch (rec.action) {
      case 'review':
        return `/tkk/${rec.tkkId}`;
      case 'start':
        return `/tkk/${rec.tkkId}`;
      case 'flashcard':
        return `/flashcard/${rec.tkkId}`;
      default:
        return `/tkk/${rec.tkkId}`;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Sparkles className="text-purple-600" size={24} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              Rekomendasi Untuk Kamu
            </h3>
            <p className="text-sm text-gray-600">
              Berdasarkan performa belajar kamu
            </p>
          </div>
        </div>
        <button
          onClick={loadRecommendations}
          className="btn btn-ghost btn-sm btn-circle"
          title="Refresh rekomendasi"
        >
          <RefreshCw size={18} />
        </button>
      </div>

      {/* Recommendations List */}
      <div className="space-y-3">
        {recommendations.map((rec, index) => (
          <Link
            key={index}
            to={getActionLink(rec)}
            className={`block p-4 rounded-lg transition-all duration-300 hover:shadow-md ${getPriorityColor(rec.priority)} group`}
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl flex-shrink-0">
                {rec.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-1">
                  {rec.title}
                </h4>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {rec.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    rec.priority === 'high' 
                      ? 'bg-red-200 text-red-700'
                      : rec.priority === 'medium'
                      ? 'bg-yellow-200 text-yellow-700'
                      : 'bg-green-200 text-green-700'
                  }`}>
                    {rec.reason}
                  </span>
                </div>
              </div>
              <div className="flex-shrink-0">
                <TrendingUp 
                  size={20} 
                  className="text-gray-400 group-hover:text-primary transition-colors" 
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsWidget;
