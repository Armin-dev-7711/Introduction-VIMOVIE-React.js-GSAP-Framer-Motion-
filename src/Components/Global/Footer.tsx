// import { ActorsImage } from "@/assets/Actors";

import { motion } from "framer-motion";
import { FaImdb, FaInstagram, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router";

// const ActorsImage: string[] = [
//   ActorOne,
//   ActorTwo,
//   ActorThree,
//   ActorFour,
//   ActorFive,
//   ActorSix,
//   ActorSeven,
//   ActorEight,
//   ActorNine,
//   ActorTen,
// ];

const Footer = (): JSX.Element => {
  return (
    <footer className='w-full footerBackground pb-4 pt-56 overflow-hidden'>
      {/* <motion.div
        initial={{ opacity: 0, scale: 2 }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        viewport={{
          once: true,
        }}
        className='w-full flex justify-start overflow-hidden shrink-0'
      >
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 16,
            ease: "linear",
            repeat: Infinity,
          }}
          className='flex justify-start items-start shrink-0'
        >
          {ActorsImage.map((item, index) => (
            <img
              key={index}
              src={item}
              alt='actors'
              className='sm:w-[450px] sm:h-[600px] w-[350px] h-[500px] object-cover object-top pr-10 rounded-sm'
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 16,
            ease: "linear",
            repeat: Infinity,
          }}
          className='flex justify-start items-start shrink-0'
        >
          {ActorsImage.map((item, index) => (
            <img
              key={index}
              src={item}
              alt='actors'
              className='sm:w-[450px] sm:h-[600px] w-[350px] h-[500px] object-cover object-top pr-10 rounded-sm'
            />
          ))}
        </motion.div>
      </motion.div> */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        className='w-full mt-24 padding-x'
      >
        <div className='max-container grid grid-cols-1 sm:grid-cols-5 gap-x-6 gap-y-12 items-start justify-start'>
          <div className='flex flex-col gap-3 sm:col-start-1 sm:col-end-3'>
            <h1 className='text-h2 sm:text-h1 uppercase font-Anton text-texts'>
              <NavLink to='/'>
                <motion.span
                  initial={{
                    opacity: 0,
                    transform: "translateX(-20px)",
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translateX(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                  }}
                  className='text-button inline-block'
                >
                  Vi
                </motion.span>{" "}
                <motion.span
                  initial={{
                    opacity: 0,
                    transform: "translateY(20px)",
                  }}
                  animate={{
                    opacity: 1,
                    transform: "translateX(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                  }}
                  className='inline-block'
                >
                  Mo<span className='text-button'>vi</span>e
                </motion.span>
              </NavLink>
            </h1>
            <p className='text-wrap font-Roboto text-paragraph text-p leading-[1.5]'>
              VI MOVIE brings you the latest movies and TV shows with an
              immersive and enjoyable experience.
            </p>
          </div>
          <div className='flex flex-col gap-10'>
            <h3 className='uppercase font-Anton leading-[1.2] text-h5 sm:text-h3 text-texts'>
              Follow us
            </h3>
            <div className='flex flex-col text-paragraph gap-6 font-Roboto'>
              <a href='#'>Yotube</a>
              <a href='#'>Instagram</a>
              <a href='#'>Telegram</a>
              <a href='#'>Tiktok</a>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <h3 className='uppercase font-Anton leading-[1.2] text-h5 sm:text-h3 text-texts'>
              product
            </h3>
            <div className='flex flex-col text-paragraph gap-6 font-Roboto'>
              <p className='text-p'>Movies</p>
              <p className='text-p'>Series</p>
              <p className='text-p'>Cartoons</p>
              <p className='text-p'>Anime</p>
            </div>
          </div>
          <div className='flex flex-col gap-10'>
            <h3 className='uppercase font-Anton leading-[1.2] text-h5 sm:text-h3 text-texts'>
              social
            </h3>
            <div className='flex text-paragraph gap-6 font-Roboto items-start flex-wrap'>
              <a
                href='#'
                className='w-[50px] h-[50px] rounded-full bg-primary/50 inline-flex justify-center items-center'
              >
                <FaInstagram className='text-button text-h4' />
              </a>
              <a
                href='#'
                className='w-[50px] h-[50px] rounded-full bg-primary/50 inline-flex justify-center items-center'
              >
                <FaImdb className='text-button text-h4' />
              </a>
              <a
                href='#'
                className='w-[50px] h-[50px] rounded-full bg-primary/50 inline-flex justify-center items-center'
              >
                <FaYoutube className='text-button text-h4' />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
