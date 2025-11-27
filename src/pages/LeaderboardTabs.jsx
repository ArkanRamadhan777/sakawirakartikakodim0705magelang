import { useState } from 'react';
import Leaderboard from './Leaderboard';
import LeaderboardOverall from './LeaderboardOverall';

const LeaderboardTabs = () => {
  const [tab, setTab] = useState('tkk');

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🏆 Leaderboard</h1>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all duration-200 ${tab === 'tkk' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-green-600 border-green-600 hover:bg-green-50'}`}
              onClick={() => setTab('tkk')}
            >
              Per TKK
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all duration-200 ${tab === 'overall' ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-blue-600 border-blue-600 hover:bg-blue-50'}`}
              onClick={() => setTab('overall')}
            >
              Overall
            </button>
          </div>
        </div>
        <div className="mt-6">
          {tab === 'tkk' ? <Leaderboard /> : <LeaderboardOverall />}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardTabs;
