import { HiOutlineSearch, HiOutlineX } from "react-icons/hi";
import ItemSearch from "./ItemSearch";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  setIsOpenSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const Search = ({ setIsOpenSearch }: Props): JSX.Element => {
  const click = useRef<HTMLInputElement | null>(null);

  useEffect(function () {
    function handleOpen(e: MouseEvent) {
      if (!(e.target instanceof Node)) return;
      if (click.current && !click.current.contains(e.target)) {
        console.log(click);
        setIsOpenSearch(false);
      }
    }
    document.addEventListener("click", handleOpen, true);

    return () => document.removeEventListener("click", handleOpen, true);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeIn",
      }}
      className='layout-window'
    >
      <div ref={click} className='window'>
        <search className='w-full flex justify-center mt-12'>
          <div className='min-w-[80px] sm:min-w-[250px] bg-[#414141] rounded-full h-[50px] sm:h-[60px] relative flex items-center'>
            <input
              type='text'
              placeholder='Search'
              className='w-[80px] sm:w-[250px] h-full rounded-full outline-none px-4 leading-0 placeholder:text-[#d0d0d0] placeholder:font-Lora placeholder:italic font-Popins text-[#d0d0d0] transition-all ease-linear duration-300 focus:w-[140px] sm:focus:w-[400px] md:focus:w-[500px]'
            />
            <button
              className='bg-texts order-2 w-[40px] h-[40px] rounded-full inline-flex
               items-center justify-center cursor-pointer mr-2'
            >
              <HiOutlineSearch className='text-primary text-h5' />
            </button>
          </div>
        </search>
        <div className='mt-12 max-h-3/4 overflow-y-auto overflow-x-hidden scroll-smooth flex items-start justify-start flex-wrap gap-x-10 gap-y-10 p-2'>
          <ItemSearch />
          <ItemSearch />
          <ItemSearch />
          <ItemSearch />
          <ItemSearch />
          <ItemSearch />
          <ItemSearch />
        </div>
        <button
          onClick={() => setIsOpenSearch(false)}
          className='absolute top-0 left-0 m-2 bg-texts h-[40px] w-[40px] rounded-full inline-flex justify-center items-center cursor-pointer'
        >
          <HiOutlineX className='text-primary text-h5' />
        </button>
      </div>
    </motion.div>
  );
};

export default Search;
