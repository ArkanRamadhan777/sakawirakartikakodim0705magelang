import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, XCircle, Trophy, Clock } from 'lucide-react';

const ProgressCard = ({ tkk, progress }) => {
    const { completed, attempts, bestScore, averageScore, lastAttempt } = progress;

    // Calculate progress percentage (0-100)
    const progressPercentage = bestScore;

    return (
        <div className={`bg-white rounded-xl border-2 p-5 transition-all hover:shadow-md ${completed ? 'border-green-200 bg-green-50/30' : 'border-gray-200'
            }`}>
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{tkk.title}</h3>
                        {completed && <CheckCircle className="text-green-600" size={20} />}
                    </div>
                    <p className="text-sm text-gray-600">{tkk.description}</p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Progress</span>
                    <span className="font-bold">{progressPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                        className={`h-2.5 rounded-full transition-all ${completed ? 'bg-green-600' : 'bg-primary'
                            }`}
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
            </div>

            {/* Stats */}
            {attempts > 0 ? (
                <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Best Score</div>
                        <div className="font-bold text-primary">{bestScore}%</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Average</div>
                        <div className="font-bold text-gray-700">{averageScore}%</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Attempts</div>
                        <div className="font-bold text-gray-700">{attempts}</div>
                    </div>
                </div>
            ) : (
                <div className="text-center py-3 mb-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">No attempts yet</p>
                </div>
            )}

            {/* Action Button */}
            <Link
                to={`/quiz/${tkk.id}`}
                className={`btn btn-sm w-full ${attempts === 0 ? 'btn-primary' : 'btn-outline'
                    }`}
            >
                {attempts === 0 ? 'Start Quiz' : 'Retake Quiz'}
            </Link>
        </div>
    );
};

export default ProgressCard;
