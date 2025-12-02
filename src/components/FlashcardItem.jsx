import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, ThumbsUp, ThumbsDown, Lightbulb } from 'lucide-react';

const FlashcardItem = ({ flashcard, onRate, showAnswer: initialShowAnswer = false }) => {
  const [isFlipped, setIsFlipped] = useState(initialShowAnswer);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleRate = (confidence) => {
    onRate(confidence);
    setIsFlipped(false);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="perspective-1000">
        <motion.div
          className="relative h-96 cursor-pointer"
          onClick={handleFlip}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Side - Question */}
          <div
            className={`absolute inset-0 backface-hidden ${
              isFlipped ? 'invisible' : 'visible'
            }`}
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="h-full bg-gradient-to-br from-primary to-primary-focus rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center text-white">
              <Lightbulb size={48} className="mb-6 opacity-80" />
              <h3 className="text-2xl font-bold text-center mb-4">
                {flashcard.question}
              </h3>
              <p className="text-sm opacity-75 mt-auto">Klik untuk lihat jawaban</p>
            </div>
          </div>

          {/* Back Side - Answer */}
          <div
            className={`absolute inset-0 backface-hidden ${
              isFlipped ? 'visible' : 'invisible'
            }`}
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="h-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col border-2 border-primary/20">
              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <ThumbsUp size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">
                  Jawaban:
                </h3>
                <p className="text-2xl font-bold text-gray-900 text-center">
                  {flashcard.answer}
                </p>
              </div>

              {/* Rating Buttons */}
              <div className="flex gap-2 mt-6">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRate(1);
                  }}
                  className="flex-1 btn btn-sm bg-red-100 hover:bg-red-200 text-red-700 border-red-300"
                >
                  Sulit
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRate(3);
                  }}
                  className="flex-1 btn btn-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-700 border-yellow-300"
                >
                  Sedang
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRate(5);
                  }}
                  className="flex-1 btn btn-sm bg-green-100 hover:bg-green-200 text-green-700 border-green-300"
                >
                  Mudah
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Flip Instruction */}
      {!isFlipped && (
        <div className="text-center mt-4">
          <button
            onClick={handleFlip}
            className="btn btn-outline btn-sm gap-2"
          >
            <RotateCcw size={16} />
            Balik Kartu
          </button>
        </div>
      )}
    </div>
  );
};

export default FlashcardItem;
