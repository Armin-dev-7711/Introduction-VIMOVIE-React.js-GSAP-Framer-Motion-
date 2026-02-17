import React, { useEffect, useState } from "react";
import Span from "../Global/Span";
import HeadSections from "../Global/HeadSections";
import ResultMovie from "./ResultMovie";
import Genre from "./Genre";
import { AnimatePresence } from "framer-motion";

const ResultList: React.FC = () => {
  const [showGenre, setShowGenre] = useState<boolean>(false);

  useEffect(
    function () {
      if (showGenre) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }

      return () => {
        document.body.classList.remove("overflow-hidden");
      };
    },
    [showGenre]
  );

  return (
    <div className='w-full padding-x mt-54 py-4 relative'>
      <div className='max-container'>
        <div className='w-full flex max-md:flex-col max-md:items-start  md:justify-between gap-4 md:items-center'>
          <div>
            <Span personalStyle='-translate-y-[20px]'>Movies</Span>
            <HeadSections
              header={<>Lorem ipsum dolor sit amet.</>}
              description={
                <>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
                  cupiditate autem asperiores aut placeat ipsam, libero natus,
                  ducimus blanditiis repudiandae odit omnis numquam. Quo
                  dignissimos doloribus nulla harum velit esse?
                </>
              }
            />
          </div>
          <div>
            <button
              onClick={() => setShowGenre(true)}
              className='bg-button cursor-pointer w-[100px] h-[50px] md:w-[150px] md:h-[100px] font-Anton text-h4 md:text-h2 text-primary uppercase rounded-sm'
            >
              Genre
            </button>
          </div>
        </div>
        <ResultMovie />
      </div>
      <AnimatePresence mode='wait'>
        {showGenre && <Genre key='Genre' setShowGenre={setShowGenre} />}
      </AnimatePresence>
    </div>
  );
};

export default ResultList;
