import { motion } from "framer-motion";

const Chapter = ({ title, text }) => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4 py-10 text-center">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-script text-yellow-600 mb-6 leading-snug"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl font-poppins text-gray-700 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        {text}
      </motion.p>
    </section>
  );
};

export default Chapter;
