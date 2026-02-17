import React from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
// import { heroSections } from "@/shared/data";
import { HomeThree } from "@/assets";
const Hero: React.FC = () => {
  // const [isIndex, setIsIndex] = useState<number>(0);
  // const settings = {
  //   // dots: false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 4000,
  //   pauseOnHover: true,
  //   easing: "ease-in",
  //   focusOnSelect: false,
  //   speed: 1000,
  //   beforeChange: (oldIndex: number, newIndex: number): void => {
  //     setIsIndex(newIndex);
  //     console.log(oldIndex);
  //   },

  //   arrows: false,
  // };

  return (
    <div className='h-[750px] md:h-screen relative z-10 overflow-hidden'>
      <div
        className='slider-container'
        onMouseDown={(e: React.MouseEvent) => e.preventDefault()}
      >
        {/* <Slider {...settings} className='h-full'> */}
        {/* {heroSections.map((item, index) => ( */}
        <div
          // tabIndex={-1}
          className='w-full h-[750px] md:h-screen relative'
          // key={index}
        >
          <img
            src={HomeThree}
            alt='Hero-image'
            className='w-full h-full object-cover'
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-center'>
            <h1 className='text-h3 sm:text-[80px] font-Anton text-texts uppercase mb-2'>
              {/* Welcome to <span className='text-button'>VI</span> MOVIE */}
              {`Welcome to vi movie`
                .toLowerCase()
                .split("")
                .map((word, i) => (
                  <motion.span
                    initial={{
                      opacity: 0,
                      transform: "translateY(40px)",
                    }}
                    animate={{ opacity: 1, transform: "translateY(0px)" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.05,
                      ease: "easeIn",
                    }}
                    className={`${
                      word === "v" || word === "i" ? "text-button" : ""
                    } uppercase inline-block`}
                    key={i}
                  >
                    {word === " " ? <span className='opacity-0'>I</span> : word}
                  </motion.span>
                ))}
            </h1>
            <motion.p
              initial={{
                opacity: 0,
                transform: "translateY(40px)",
              }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{
                duration: 1,
                ease: "linear",
                delay: 2,
              }}
              className='text-small sm:text-p text-paragraph font-Roboto mx-auto'
            >
              This is the place where you can find the latest movies and TV
              shows from around the world
            </motion.p>
          </div>
          <div className='w-full h-full absolute top-0 left-0 layerHome' />
        </div>
        {/* ))} */}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default Hero;
