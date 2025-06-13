import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FunnyCard = () => {
  const [noButtonStyle, setNoButtonStyle] = useState({});
  const [showModal, setShowModal] = useState(false);

  const moveButton = () => {
    const x = Math.floor(Math.random() * 160) - 80;
    const y = Math.floor(Math.random() * 140);
    setNoButtonStyle({
      transform: `translate(${x}px, ${y}px)`,
      transition: "transform 0.3s ease",
      position: "relative",
    });
  };

  const handleYesClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto p-6 rounded-xl text-center bg-white border border-yellow-300 shadow-lg relative">
        <h2 className="text-xl sm:text-2xl font-semibold text-yellow-800 mb-6">
          Kya tum mujhse dosti karogi?
        </h2>
        <div className="flex justify-center gap-6 relative flex-wrap">
          <button
            onClick={handleYesClick}
            className="bg-yellow-500 hover:bg-yellow-400 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
          >
            Haan
          </button>
          <button
            onMouseOverCapture={moveButton}
            onClick={moveButton}
            style={noButtonStyle}
            className="bg-yellow-800 hover:bg-yellow-900 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
          >
            Nahin
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-sm text-center shadow-xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-yellow-600 mb-2">Yay! 🥳</h2>
              <p className="text-gray-700 mb-4">Ab hum officially dost ban gaye! 💛</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FunnyCard;
