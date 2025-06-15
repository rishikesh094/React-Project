import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Chapter from "./components/Chapter";
import chapters from "./memories";
import { motion } from "framer-motion";
import FinalNote from "./pages/FinalNote";
import WelcomeScreen from "./components/WelcomeScreen"; // Import the welcome screen

function Home() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => setSelectedIndex(null);

  if (selectedIndex !== null) {
    const chapter = chapters[selectedIndex];
    const isLastChapter = selectedIndex === chapters.length - 1;

    return (
      <div className="relative bg-yellow-50 min-h-screen px-4 py-10">
        <Chapter title={chapter.chapter} text={chapter.content} isLast={selectedIndex === chapters.length - 1}/>

        <button
          onClick={handleBack}
          className="absolute top-4 left-4 bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 font-semibold shadow"
        >
          ⬅ Back
        </button>

        {isLastChapter && (
          <div className="flex flex-col items-center ">
            {/* 👇 Animated hand arrow */}
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-3xl mb-4"
            >
              👇
            </motion.div>

            <button
              onClick={() => navigate("/final-note")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-xl shadow font-bold text-lg transition"
            >
              🌼 Ek Chhoti Si Baat
            </button>
          </div>

        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-10 flex flex-col items-center">
      <h1 className="text-4xl font-cursive md:text-7xl md:font-semibold font-script text-yellow-600 mb-10 text-center">
        🔖 Moments That Mattered
      </h1>

      <div className="w-full max-w-3xl space-y-6">
        {chapters.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer bg-white shadow hover:shadow-lg transition rounded-2xl p-5 border-l-4 border-yellow-400 hover:border-yellow-500 hover:bg-yellow-100"
          >
            <h2 className="text-xl md:text-2xl font-poppins font-semibold text-gray-800">
              {item.chapter}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/final-note" element={<FinalNote />} />
    </Routes>
  );
}

function AppWrapper() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <>
      {showWelcome ? (
        <WelcomeScreen onFinish={() => setShowWelcome(false)} />
      ) : (
        <App />
      )}
    </>
  );
}

export default AppWrapper;
