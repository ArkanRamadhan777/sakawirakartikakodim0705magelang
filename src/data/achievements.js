// Achievement definitions
export const achievements = [
  // Quiz Completion Achievements
  {
    id: 'first_quiz',
    title: 'Pemula',
    description: 'Selesaikan quiz pertama',
    icon: '🎯',
    requirement: { type: 'quizCount', value: 1 },
    tier: 'bronze'
  },
  {
    id: 'quiz_master_5',
    title: 'Pembelajar Aktif',
    description: 'Selesaikan 5 quiz',
    icon: '📚',
    requirement: { type: 'quizCount', value: 5 },
    tier: 'bronze'
  },
  {
    id: 'quiz_master_10',
    title: 'Pejuang Ilmu',
    description: 'Selesaikan 10 quiz',
    icon: '🎓',
    requirement: { type: 'quizCount', value: 10 },
    tier: 'silver'
  },
  {
    id: 'quiz_master_25',
    title: 'Ahli Materi',
    description: 'Selesaikan 25 quiz',
    icon: '🏆',
    requirement: { type: 'quizCount', value: 25 },
    tier: 'gold'
  },
  
  // Score Achievements
  {
    id: 'score_100',
    title: 'Raihan Pertama',
    description: 'Kumpulkan total 100 poin',
    icon: '⭐',
    requirement: { type: 'totalScore', value: 100 },
    tier: 'bronze'
  },
  {
    id: 'score_500',
    title: 'Pengumpul Poin',
    description: 'Kumpulkan total 500 poin',
    icon: '🌟',
    requirement: { type: 'totalScore', value: 500 },
    tier: 'silver'
  },
  {
    id: 'score_1000',
    title: 'Master Skor',
    description: 'Kumpulkan total 1000 poin',
    icon: '💎',
    requirement: { type: 'totalScore', value: 1000 },
    tier: 'gold'
  },
  {
    id: 'score_2500',
    title: 'Legenda',
    description: 'Kumpulkan total 2500 poin',
    icon: '👑',
    requirement: { type: 'totalScore', value: 2500 },
    tier: 'platinum'
  },
  
  // Perfect Score Achievements
  {
    id: 'perfect_first',
    title: 'Sempurna!',
    description: 'Dapatkan nilai 100 pertama kali',
    icon: '💯',
    requirement: { type: 'perfectScore', value: 1 },
    tier: 'silver'
  },
  {
    id: 'perfect_5',
    title: 'Perfeksionis',
    description: 'Dapatkan nilai 100 sebanyak 5 kali',
    icon: '🎖️',
    requirement: { type: 'perfectScore', value: 5 },
    tier: 'gold'
  },
  
  // Speed Achievements
  {
    id: 'speed_demon',
    title: 'Kilat',
    description: 'Selesaikan quiz dalam waktu kurang dari 3 menit',
    icon: '⚡',
    requirement: { type: 'fastCompletion', value: 180 }, // 3 minutes in seconds
    tier: 'silver'
  },
  {
    id: 'flash',
    title: 'Secepat Cahaya',
    description: 'Selesaikan quiz dalam waktu kurang dari 2 menit',
    icon: '🚀',
    requirement: { type: 'fastCompletion', value: 120 }, // 2 minutes
    tier: 'gold'
  },
  
  // Accuracy Achievements
  {
    id: 'sharpshooter',
    title: 'Penembak Jitu',
    description: 'Jawab benar 15 dari 20 soal',
    icon: '🎯',
    requirement: { type: 'accuracy', value: 75 }, // 75% accuracy
    tier: 'silver'
  },
  {
    id: 'sniper',
    title: 'Sniper',
    description: 'Jawab benar 18 dari 20 soal',
    icon: '🏹',
    requirement: { type: 'accuracy', value: 90 }, // 90% accuracy
    tier: 'gold'
  },
  
  // Leaderboard Achievements
  {
    id: 'top_10',
    title: 'Top 10',
    description: 'Masuk 10 besar leaderboard overall',
    icon: '🥉',
    requirement: { type: 'leaderboardRank', value: 10 },
    tier: 'silver'
  },
  {
    id: 'top_5',
    title: 'Top 5',
    description: 'Masuk 5 besar leaderboard overall',
    icon: '🥈',
    requirement: { type: 'leaderboardRank', value: 5 },
    tier: 'gold'
  },
  {
    id: 'champion',
    title: 'Juara',
    description: 'Raih peringkat #1 di leaderboard',
    icon: '🥇',
    requirement: { type: 'leaderboardRank', value: 1 },
    tier: 'platinum'
  }
];

// Tier colors and styles
export const tierStyles = {
  bronze: {
    bg: 'bg-orange-100',
    border: 'border-orange-400',
    text: 'text-orange-700',
    badge: 'badge-warning'
  },
  silver: {
    bg: 'bg-gray-100',
    border: 'border-gray-400',
    text: 'text-gray-700',
    badge: 'badge-ghost'
  },
  gold: {
    bg: 'bg-yellow-100',
    border: 'border-yellow-400',
    text: 'text-yellow-700',
    badge: 'badge-warning'
  },
  platinum: {
    bg: 'bg-purple-100',
    border: 'border-purple-400',
    text: 'text-purple-700',
    badge: 'badge-secondary'
  }
};
