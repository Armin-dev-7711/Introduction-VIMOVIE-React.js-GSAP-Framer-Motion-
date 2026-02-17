import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
  items: {
    title: string;
    description: string;
  };
  index: number;
};

const Question = ({ items, index }: Props) => {
  const [showQuestion, setShowQuestion] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "spring",
        delay: index * 0.1,
      }}
      viewport={{
        once: true,
      }}
      className='w-full grid will-change-transform'
    >
      <div
        onClick={() => setShowQuestion((value) => !value)}
        className='flex justify-between items-center cursor-pointer gap-2'
      >
        <h3 className='font-Anton leading-[1.3] text-texts text-h5 md:text-h3 uppercase'>
          {items.title}
        </h3>
        {/* <HiOutlinePlus className='text-h5 md:text-h3 text-button' /> */}
        <div className='relative h-[50px] w-[50px]'>
          <span className='w-[30px] h-[2px] bg-button inline-block absolute right-2 bottom-3'></span>
          <span
            className={`w-[30px] h-[2px] bg-button inline-block absolute right-2 bottom-3 transition-all duration-500 ease-linear ${
              showQuestion ? "rotate-0 opacity-0" : "-rotate-90 opacity-100"
            }
    `}
          ></span>
        </div>
      </div>
      <div className='w-full h-[1px] bg-paragraph my-6' />

      <AnimatePresence mode='wait'>
        {showQuestion && (
          <motion.div
            key='text'
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className='font-Roboto text-paragraph leading-[1.5] overflow-hidden will-change-transform'
            layout
          >
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            >
              {items.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Question;
