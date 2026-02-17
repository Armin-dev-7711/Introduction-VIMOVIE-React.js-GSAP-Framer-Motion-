import { motion } from "framer-motion";
import { NavLink } from "react-router";

const PageNotFound = (): JSX.Element => {
  return (
    <div className='h-[650px] md:h-screen md:min-h-screen relative grid place-content-center justify-items-center'>
      <h4 className='font-Anton text-[150px] scale-y-110 md:text-[350px] md:scale-y-150 tracking-wider text-texts relative z-10'>
        {["4", "0", "4"].map((item, index) => (
          <motion.span
            initial={{
              transform: "translateY(-100vh)",
            }}
            animate={{
              transform: "translateY(0)",
            }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            key={index}
            className='inline-block'
          >
            {item}
          </motion.span>
        ))}
      </h4>
      <motion.p
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 1,
          ease: "anticipate",
        }}
        className='font-Roboto relative z-20 text-texts mt-8'
      >
        It seem's your gona lost please come back
        <NavLink
          to='/'
          className='text-button font-Anton leading-none ml-1 translate-y-[1px] inline-block'
        >
          Home
        </NavLink>
      </motion.p>
    </div>
  );
};

export default PageNotFound;
