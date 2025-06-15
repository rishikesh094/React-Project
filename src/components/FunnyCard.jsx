import React, { useRef, useState } from "react";

const FunnyCard = () => {
  const submitButtonRef = useRef(); // hidden submit button reference
  const [showModal, setShowModal] = useState(false);

  const handleYesClick = () => {
    submitButtonRef.current.click(); // now it submits naturally
    setShowModal(true);

    setTimeout(() => {
    window.location.href = "https://journey-r.netlify.app/";
  }, 2000);
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
            onMouseOverCapture={() => {}}
            className="bg-yellow-800 hover:bg-yellow-900 text-white px-6 py-2 rounded-lg font-medium transition duration-300"
          >
            Nahin
          </button>
        </div>
      </div>

      {/* Hidden form connected to Getform */}
      <form
        action="https://getform.io/f/bqomqgob"
        method="POST"
        className="hidden"
      >
        <input type="hidden" name="name" value="Someone clicked YES!" />
        <input type="hidden" name="message" value="Dosti Accept!" />
        <input
          type="hidden"
          name="_redirect"
          value="https://journey-r.netlify.app/"
        />

        {/* 👇 Hidden submit button */}
        <button type="submit" ref={submitButtonRef}></button>
      </form>

      {/* Modal after success */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm text-center shadow-xl">
            <h2 className="text-2xl font-bold text-yellow-600 mb-2">Yay! 🥳</h2>
            <p className="text-gray-700 mb-4">
              Thank you so much… You have no idea how happy this makes me. 💛
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FunnyCard;
