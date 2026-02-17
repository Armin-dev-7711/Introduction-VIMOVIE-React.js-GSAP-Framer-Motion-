import { motion } from "framer-motion";
import React from "react";
import GenreCard from "./GenreCard";

import Span from "../Global/Span";
import HeadSections from "../Global/HeadSections";

type Types = {
  setShowGenre: (value: boolean) => void;
};

const genres = [
  { name: "Action" },
  { name: "Horror" },
  { name: "Comedy" },
  { name: "Drama" },
  { name: "Fantasy" },
];

const Genre: React.FC<Types> = ({ setShowGenre }) => {
  return (
    <motion.div
      initial={{
        clipPath: "circle(0.0% at 50% 50%)",
        backgroundColor: "#d63031",
      }}
      animate={{
        clipPath: "circle(70.7% at 50% 50%)",
        backgroundColor: "#121212",
      }}
      exit={{
        clipPath: "circle(0.0% at 50% 50%)",
      }}
      transition={{
        duration: 1,
        ease: "anticipate",
      }}
      className='fixed w-screen h-screen bg-primary z-50 top-0 left-0 overflow-y-auto'
    >
      <div className='padding-x w-full py-4 h-full'>
        <div className='max-container pt-16'>
          <Span personalStyle='-translate-y-[20px]'>Genre</Span>
          <HeadSections
            header={<>Lorem ipsum dolor sit.</>}
            description={
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                natus accusantium quae quas enim in sapiente qui nisi nobis
                fugiat! Non officiis illum labore laboriosam, mollitia suscipit
                exercitationem deserunt maxime.
              </>
            }
          />
        </div>
        <div className='w-full flex flex-wrap justify-center items-center gap-6 mt-16'>
          {genres.map((genre, index) => (
            <GenreCard key={index} genre={genre.name} />
          ))}
        </div>
        <div className='w-full text-center mt-12'>
          <button
            onClick={() => {
              setShowGenre(false);
            }}
            className='w-[100px] h-[70px] bg-button text-primary font-Anton text-h2 inline-flex justify-center items-center cursor-pointer rounded-sm'
          >
            OUT
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Genre;
