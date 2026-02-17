import React, { useEffect, useRef, useState } from "react";
import Span from "../Global/Span";
import HeadSections from "../Global/HeadSections";
import { AnimatePresence, motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CR1, CR2, CR3, CR4, CR6 } from "@/assets/Cartoons";

const Cartoons: string[] = [CR1, CR2, CR3, CR4, CR6];

const PopularCartoons: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function resetInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 3000);
  }

  function stopInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }

  function nextSlide() {
    setIndex((Index) => (Index + 1) % Cartoons.length);
    resetInterval();
  }

  function prevSlide() {
    setIndex((Index) => (Index - 1 + Cartoons.length) % Cartoons.length);
    resetInterval();
  }

  useEffect(function () {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className='w-full padding-x mt-56 relative py-4'>
      <div className='max-container'>
        <Span personalStyle='-translate-y-[20px]'>Popular</Span>
        <HeadSections
          header={<>Popular cartoons</>}
          description={
            <>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
              eveniet vel earum quidem possimus libero, enim perspiciatis porro
              nihil necessitatibus voluptate quas nisi recusandae et
              accusantium! Eaque harum asperiores cum nobis excepturi
              perferendis dolor nihil, quo nemo labore veritatis ad mollitia
              voluptatum tempora quidem iure atque nesciunt aliquam molestiae
              nostrum.
            </>
          }
        />
        <div
          className='relative w-full flex justify-center items-center h-[650px] overflow-hidden mt-14'
          style={{ perspective: "1200px" }}
        >
          {Cartoons.map((item, i) => {
            const offset =
              ((i - index + Cartoons.length) % Cartoons.length) - 2;
            return (
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  x: offset * 200,
                  transformOrigin: "center center",
                  scale: offset === 0 ? 1 : 0.3,
                  opacity: offset === 0 ? 1 : 0.4,
                  zIndex: offset === 0 ? 10 : 1,
                  rotateY: offset * -220,
                }}
                transition={{
                  duration: 1.5,
                  ease: "linear",
                }}
                className='sm:w-[400px] sm:h-[550px] max-sm:w-full max-sm:max-w-[300px] max-sm:h-[450px] absolute'
                key={i}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img
                  alt='cartoons'
                  src={item}
                  className='w-full h-full object-cover absolute inset-0'
                />
                <AnimatePresence mode='wait'>
                  {offset === 0 && (
                    <motion.div
                      onMouseEnter={stopInterval}
                      onMouseLeave={resetInterval}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        duration: 1,
                        ease: "linear",
                      }}
                      className='w-full h-full absolute top-0 z-10 layer flex flex-col justify-end p-4'
                    >
                      <h2 className='font-Anton md:text-h2 text-h5 text-texts'>
                        Lorem, ipsum dolor.
                      </h2>
                      <p className='text-p text-paragraph font-Roboto'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Atque, dignissimos.
                      </p>
                      <div className='flex w-full justify-between items-center text-texts mt-6'>
                        <button className='uppercase font-Anton text-h6 text-primary bg-button w-[60px] h-[40px] inline-flex justify-center items-center rounded-sm cursor-pointer'>
                          add
                        </button>
                        <div className='flex text-texts items-center gap-2'>
                          <span className='font-Anton text-h6 '>4.7</span>
                          <HiStar className='text-button text-h4' />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          <button
            className='absolute left-5 p-3 bg-texts text-primary cursor-pointer rounded-full z-30'
            onClick={prevSlide}
          >
            <FaChevronLeft />
          </button>
          <button
            className='absolute right-5 p-3 bg-texts text-primary cursor-pointer rounded-full z-30'
            onClick={nextSlide}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      <canvas className='absolute top-0 left-0 z-[-1] w-full h-full' />
    </div>
  );
};

export default PopularCartoons;
