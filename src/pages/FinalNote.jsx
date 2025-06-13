import FunnyCard from "../components/FunnyCard";

function FinalNote() {
  return (
    <div className="min-h-screen bg-yellow-100 flex flex-col items-center justify-center px-6 py-12 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-700 mb-8">
        🌼 Ek Chhoti Si Baat
      </h1>

      <p className="text-base sm:text-lg md:text-xl max-w-2xl text-gray-800 leading-relaxed mb-10">
        Main tumse ab tak jitni baatein ki hain... un sab mein jis ladki ki baat karta tha, wo <span className="font-semibold text-yellow-800">tum hi thi</span>.<br /><br />
        Main sirf itna kehna chahta hoon — <span className="font-medium text-yellow-700">mujhe tumse dosti karni hai</span>, bas ek acchi si dosti.
      </p>

      <FunnyCard />
    </div>
  );
}

export default FinalNote;
