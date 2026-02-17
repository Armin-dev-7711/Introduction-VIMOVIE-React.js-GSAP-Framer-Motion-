import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeadSections from "../Global/HeadSections";
import Span from "../Global/Span";
import { HiStar } from "react-icons/hi";
import ResultList from "./ResultList";
import { HomeFive, HomeFour, HomeOne, HomeThree, HomeTwo } from "@/assets";

const images: string[] = [HomeOne, HomeTwo, HomeThree, HomeFour, HomeFive];

const BodyMovie: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function resetInterval(): void {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 3000);
  }

  const nextSlide = (): void => {
    setIndex((prev) => (prev + 1) % images.length);
    resetInterval();
  };
  const prevSlide = (): void => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(function () {
    resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "linear" }}
        className='w-full padding-x mt-54 py-4'
      >
        <div className='max-container'>
          <Span personalStyle='-translate-y-[20px]'>Popular</Span>
          <HeadSections
            header={<>Popular movies</>}
            description={
              <>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur, saepe dolor reiciendis voluptas autem optio
                repellendus quisquam sunt, accusantium amet ad ratione odit
                aperiam error hic voluptatum delectus eos exercitationem quod.
                Cumque voluptatum perspiciatis nostrum! Accusamus necessitatibus
                maxime, non, provident quam nulla obcaecati, quod quo odio
                dolore saepe perspiciatis. Consequuntur?
              </>
            }
          />
          <div
            className='relative flex items-center justify-center h-[650px] w-full mt-14 overflow-hidden'
            style={{ perspective: "1200px" }}
          >
            {images.map((img, i) => {
              const offset = ((i - index + images.length) % images.length) - 2;
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    x: offset * 300,
                    scale: offset === 0 ? 1 : 0.5,
                    rotateY: offset * -40,
                    opacity: offset === 0 ? 1 : 0.3,
                    transformOrigin: "center center",
                    zIndex: offset === 0 ? 10 : 1,
                  }}
                  transition={{ duration: 1.5 }}
                  style={{ transformStyle: "preserve-3d" }}
                  key={i}
                  className=' sm:w-[400px] sm:h-[550px] max-sm:w-full max-sm:max-w-[300px] max-sm:h-[450px] absolute'
                >
                  <motion.img
                    src={img}
                    alt='Slide'
                    className=' w-full h-full object-cover rounded-lg shadow-xl absolute inset-0'
                  />
                  {offset === 0 && (
                    <motion.div
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        duration: 1,
                        ease: "linear",
                      }}
                      className='w-full h-full layer flex flex-col justify-end p-4 absolute inset-0
                '
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
                </motion.div>
              );
            })}

            <button
              className='absolute left-5 p-3 bg-black/60 text-white rounded-full z-30'
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>
            <button
              className='absolute right-5 p-3 bg-black/60 text-white rounded-full z-30'
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
      <ResultList />
    </>
  );
};

export default BodyMovie;
