import { motion } from "framer-motion";
import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import { useProvider } from "../contexts/WebsiteContext";

const Chosen: React.FC = () => {
  const { SmoothScrollAnimation } = useProvider();
  // function smoothScrollToTop(duration: number): void {
  //   const start = window.scrollY;
  //   const startTime = performance.now();

  //   const animateScroll = (currentTime: number) => {
  //     const elapsed = currentTime - startTime;
  //     const progress = Math.min(elapsed / duration, 1); // Normalized progress (0 to 1)
  //     const easeInOutQuad =
  //       progress < 0.5
  //         ? 2 * progress * progress
  //         : -1 + (4 - 2 * progress) * progress; // Easing function

  //     window.scrollTo(0, start - start * easeInOutQuad);

  //     if (elapsed < duration) {
  //       requestAnimationFrame(animateScroll);
  //     }
  //   };

  //   requestAnimationFrame(animateScroll);
  // }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      exit={{
        opacity: 0,
        y: 100,
      }}
      transition={{
        duration: 1,
        ease: "linear",
      }}
      className='w-full padding-x max-md:h-[700px] md:h-screen md:min-h-screen py-4'
    >
      <div className='max-container flex items-center justify-center h-full flex-col gap-20'>
        <h2 className='font-Anton sm:text-h2 text-h4 uppercase text-paragraph'>
          Please first time choose or select between movie & series
        </h2>
        <button
          onClick={() => SmoothScrollAnimation(1000)}
          className='bg-red-500 w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] rounded-full inline-flex justify-center items-center cursor-pointer'
        >
          <HiOutlineArrowUp className='text-primary text-h3 sm:text-h1' />
        </button>
      </div>
    </motion.div>
  );
};

export default Chosen;
