import { AnimatePresence, motion } from "framer-motion";

import { useSearchParams } from "react-router";
import Movie from "./Movie";
import Series from "./Series";

const HeroMovie: React.FC<{ MS: null | string }> = ({ MS }): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  // const MS = searchParams.get("type");

  function handleLink(value: string) {
    searchParams.set("type", value);
    setSearchParams(searchParams);
  }

  return (
    <div className='realtive w-full max-md:h-[650px] md:h-screen md:min-h-screen relative transition-all duration-700 ease-linear'>
      <Movie handleLink={handleLink} MS={MS} />
      <Series handleLink={handleLink} MS={MS} />
      <AnimatePresence mode='wait'>
        {MS !== null && (
          <motion.button
            key='button-back'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "anticipate" }}
            className='text-h1 absolute bottom-4 left-4 text-texts uppercase font-Anton cursor-pointer'
            onClick={() => {
              searchParams.delete("type");
              setSearchParams(searchParams);
            }}
          >
            Back
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroMovie;
