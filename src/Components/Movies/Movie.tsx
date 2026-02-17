import { Pr } from "@/shared/data";
import { AnimatePresence, motion } from "framer-motion";

const Movie: React.FC<Pr> = ({ handleLink, MS }) => {
  return (
    <div
      onClick={() => {
        handleLink("movie");
      }}
      className={`w-full h-full pathMovieOne absolute left-0 top-0 overflow-hidden ${
        MS === null && "cursor-pointer"
      } transition-all duration-700 ease-linear ${
        MS === null ? "" : MS === "series" && "pathOffMovieOne"
      } ${MS === null ? "" : MS === "movie" && "pathOnMovieOne"}`}
    >
      <img
        src='/Movies.webp'
        alt='Movies'
        className='w-full h-full object-cover'
      />
      <div className='w-full h-full absolute inset-0 bg-primary/20 z-20 padding-x'>
        <div
          className={`max-container h-full relative transition-all duration-700 ease-linear`}
        >
          <h2
            className={`text-h4 sm:text-h1 font-Anton text-texts duration-700 ease-linear absolute top-1/2 left-[10%] uppercase overflow-hidden transition-all delay-500 ${
              MS === "movie" && "opacity-0 pointer-events-none"
            }`}
          >
            <span
              className={`inline-block transition-all duration-500 ease-linear  ${
                MS === "movie"
                  ? "translate-y-[100%]"
                  : "translate-y-[0] delay-1000"
              }`}
            >
              movies
            </span>
          </h2>
          <AnimatePresence mode='wait'>
            {MS === "movie" && (
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                <motion.h2 className='text-h4 md:text-h1 will-change-transform font-Anton text-texts uppercase overflow-hidden w-full mb-4'>
                  {/* VI MOVIE provides you with the best quality movies and the
                  latest updates. */}
                  {"You can watch your favorite movies"
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

export default Movie;
