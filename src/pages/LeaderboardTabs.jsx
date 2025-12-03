import { useState } from 'react';
import { Trophy } from 'lucide-react';
import Leaderboard from './Leaderboard';
import LeaderboardOverall from './LeaderboardOverall';

const LeaderboardTabs = () => {
  const [tab, setTab] = useState('tkk');

  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Trophy className="text-red-600" size={40} />
            Leaderboard
          </h1>
          <div className="flex justify-center gap-4 mt-4">
            <button
              className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all duration-200 ${tab === 'tkk' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-600 hover:bg-red-50'}`}
              onClick={() => setTab('tkk')}
            >
              Per TKK
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-semibold border-2 transition-all duration-200 ${tab === 'overall' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-600 hover:bg-red-50'}`}
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
