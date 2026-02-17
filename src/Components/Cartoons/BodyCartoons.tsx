import React, { useEffect, useState } from "react";
import Span from "../Global/Span";
import HeadSections from "../Global/HeadSections";
import CartoonItems from "./CartoonItems";
import { AnimatePresence } from "framer-motion";
import Genre from "../Movies/Genre";

const BodyCartoons: React.FC = () => {
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
    <div className='relative mt-56 padding-x w-full py-4'>
      <div className='max-container'>
        <div className='w-full flex justify-start max-sm:gap-8 max-sm:flex-wrap gap-12 sm:justify-between items-center'>
          <div>
            <Span personalStyle='-translate-y-[20px]'>Cartoons</Span>
            <HeadSections
              header={<>Lorem ipsum dolor sit.</>}
              description={
                <>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  explicabo totam saepe, iusto in, facere vel, accusantium ullam
                  dolorum vero nostrum. Praesentium quas eius error? Voluptatum,
                  distinctio quisquam sapiente dolore placeat qui, fugiat sit
                  tempora minus quas consequuntur est magni!
                </>
              }
            />
          </div>
          <button
            onClick={() => setShowGenre(true)}
            className='bg-button cursor-pointer w-[100px] h-[50px] md:w-[150px] md:h-[100px] font-Anton text-h4 md:text-h2 text-primary uppercase rounded-sm'
          >
            Genre
          </button>
        </div>
        <CartoonItems />
      </div>
      <AnimatePresence mode='wait'>
        {showGenre && <Genre key='Genre' setShowGenre={setShowGenre} />}
      </AnimatePresence>
    </div>
  );
};

export default BodyCartoons;
