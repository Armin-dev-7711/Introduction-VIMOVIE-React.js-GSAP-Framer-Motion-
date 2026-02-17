import { Pr } from "@/shared/data";
import { AnimatePresence, motion } from "framer-motion";

const Series: React.FC<Pr> = ({ handleLink, MS }) => {
  return (
    <div
      onClick={() => {
        handleLink("series");
      }}
      className={`w-full h-full pathMovieTwo absolute right-0 top-0 overflow-hidden ${
        MS === null && "cursor-pointer"
      } transition-all duration-700 ease-linear ${
        MS === null ? "" : MS === "movie" && "pathOffMovieTwo"
      } ${MS === null ? "" : MS === "series" && "pathOnMovieTwo"}`}
    >
      {/* <img
        src='/src/assets/HomeOne.png'
        className={`object-cover h-full w-full transition-all duration-300 ${
          scale && MS === null ? "scale-110" : "scale-100"
        }`}
        alt=''
      /> */}
      {/* <video ref={isPlay} className='w-full h-full object-cover' muted loop>
        <source src='/videoOne.mp4' type='video/mp4' />
      </video> */}
      <img
        src='/Series.webp'
        alt='Series'
        className='w-full h-full object-cover'
      />
      <div className='w-full h-full absolute inset-0 bg-primary/20 z-20 padding-x'>
        <div className='max-container h-full relative transition-all duration-700 ease-linear'>
          {/* <h2
            className={`text-h4 sm:text-h1 font-Anton  text-texts transition-all duration-700 ease-linear ${
              MS === "series"
                ? "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                : "absolute top-[40%] right-[10%] pl-[15%]"
            } `}
          >
            Series
          </h2> */}

          <h2
            className={`text-h4 sm:text-h1 font-Anton text-texts duration-700 ease-linear absolute top-[40%] right-[10%] pl-[15%] uppercase overflow-hidden transition-all delay-500 ${
              MS === "series" && "opacity-0 pointer-events-none"
            }`}
          >
            <span
              className={`inline-block transition-all duration-500 ease-linear ${
                MS === "series"
                  ? "translate-y-[100%]"
                  : "translate-y-[0] delay-1000"
              }`}
            >
              Series
            </span>
          </h2>
          <AnimatePresence mode='wait'>
            {MS === "series" && (
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                <motion.h2 className='text-h4 md:text-h1 font-Anton will-change-transform text-texts uppercase overflow-hidden w-full mb-4'>
                  {/* VI MOVIE provides you with the best quality movies and the
                  latest updates. */}
                  {"You can watch your favorite series"
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        className='inline-block mr-2'
                        initial={{
                          translateY: "100%",
                          opacity: 0,
                        }}
                        animate={{
                          translateY: "0",
                          opacity: 1,
                        }}
                        exit={{
                          translateY: "100%",
                          opacity: 0,
                        }}
                        transition={{
                          duration: 1,
                          ease: "anticipate",
                          delay: index * 0.1,
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                </motion.h2>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Series;
