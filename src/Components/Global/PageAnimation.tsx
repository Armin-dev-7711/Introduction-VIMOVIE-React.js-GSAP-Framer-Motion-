import { motion } from "framer-motion";

const PageAnimation = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // const anim = (variants: object): object => {
  //   return {
  //     initial: "initial",
  //     animate: "enter",
  //     exit: "exit",
  //     variants,
  //   };
  // };

  // const opacity = {
  //   initial: {
  //     clipPath: "circle(0.0% at 50% 50%)",
  //   },
  //   enter: {
  //     clipPath: "circle(70.7% at 50% 50%)",
  //     // opacity: 1,
  //     // transition: {
  //     //   duration: 2,
  //     //   ease: "linear",
  //     // },
  //     transition: {
  //       duration: 1,
  //       ease: "linear",
  //     },
  //   },
  //   exit: {
  //     clipPath: "circle(0.0% at 50% 50%)",
  //     // opacity: 0,
  //   },
  // };

  // return <motion.div {...anim(opacity)}></motion.div>;
  return (
    <>
      {children}
      <motion.div
        // key='page-transition'
        initial={{ clipPath: "circle(70.7% at 50% 50%)" }}
        animate={{ clipPath: "circle(0% at 50% 50%)" }}
        exit={{ clipPath: "circle(70.7% at 50% 50%)" }}
        transition={{ duration: 1, ease: "linear" }}
        className='fixed inset-0 pointer-events-none z-50 bg-black'
      />
    </>
  );
};

export default PageAnimation;
