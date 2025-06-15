import { useEffect, useState } from "react";
import "./typing.css"

const WelcomeScreen = ({ onFinish }) => {
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!started) {
            const handleContinue = () => {
                setStarted(true);
                onFinish();
            };

            window.addEventListener("keydown", handleContinue);
            window.addEventListener("click", handleContinue);
            window.addEventListener("touchstart", handleContinue);

            return () => {
                window.removeEventListener("keydown", handleContinue);
                window.removeEventListener("click", handleContinue);
                window.removeEventListener("touchstart", handleContinue);
            };
        }
    }, [onFinish, started]);

    return (
        <div className="fixed inset-0 bg-yellow-100 flex flex-col items-center justify-center text-center z-50 px-4">
            {/* Top-left clickable text for mobile */}
            <div className="absolute top-4 left-4">
                <button
                    onClick={() => {
                        setStarted(true);
                        onFinish();
                    }}
                    className="text-yellow-700 md:hidden text-sm sm:text-base font-semibold underline hover:text-yellow-900 transition"
                >
                    👉 Click here to start
                </button>
            </div>

            {/* Main welcome content */}
            <h1 className="text-2xl md:text-6xl font-cursive font-bold text-yellow-800 mb-4">
                <span className="typing-line line-1 block">
                    Welcome to a short but special journey...
                </span>
            </h1>
            <p className="text-lg md:text-3xl font-cursive font-semibold text-gray-800">
                <span className="typing-line line-2 block">
                    Press any key or tap to relive each moment, one chapter at a time.
                </span>
            </p>
        </div>
    );
};

export default WelcomeScreen;
