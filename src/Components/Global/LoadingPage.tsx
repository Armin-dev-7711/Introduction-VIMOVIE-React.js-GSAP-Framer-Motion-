// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// const LoadingPage = (): JSX.Element => {
//   const spans = Array.from({ length: 20 }, (_, i) => i);
//   const [move, setMove] = useState<number>(0);
//   const [isHeight, setIsHeight] = useState<number | undefined>(0);

//   useEffect(
//     function () {
//       const progress: number | undefined = document
//         .querySelector(".ss")
//         ?.getBoundingClientRect().width;

//       if (move === progress) return;
//       setIsHeight(progress);

//       const movement: number | undefined =
//         progress === undefined ? undefined : progress / 6;

//       const interval: NodeJS.Timeout = setInterval(function () {
//         setMove((value) => value + movement);
//       }, 600);

//       return () => clearInterval(interval);
//     },
//     [move]
//   );

//   return (
//     <div className='w-screen h-screen min-h-screen min-w-screen flex justify-center items-center flex-col padding-x'>
//       <div className='h-fit overflow-hidden relative text-[50px] sm:text-[90px]'>
//         <motion.p
//           initial={{
//             transform: "translateY(0)",
//           }}
//           animate={{
//             transform: "translateY(-100%)",
//           }}
//           transition={{
//             duration: 1,
//             delay: 3.5,
//             ease: "linear",
//           }}
//           className='mb-4 font-Anton  uppercase text-texts'
//         >
//           Loading <span className='inline-block dotTop'>.</span>
//           <span className='inline-block dotDown'>.</span>
//           <span className='inline-block dotTop'>.</span>
//         </motion.p>
//         <motion.p
//           initial={{
//             transform: "translateY(100%)",
//           }}
//           animate={{
//             transform: "translateY(0)",
//           }}
//           transition={{
//             duration: 1,
//             delay: 3.5,
//             ease: "linear",
//           }}
//           className='mb-4 font-Anton  uppercase text-texts bottom-0 absolute z-50'
//         >
//           Welcome
//         </motion.p>
//       </div>
//       <div className='w-full max-w-[550px] h-[60px] border-4 border-texts rounded-sm p-2 flex items-center gap-1 transition-all duration-300 ease-linear ss'>
//         {spans.map((item) => (
//           <motion.span
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               duration: 2,
//               delay: (item + 1) * 0.2,
//               // ease: "linear",
//             }}
//             key={item}
//             className='w-1/20 h-full inline-block bg-texts'
//           ></motion.span>
//         ))}
//       </div>
//       <div className='justify-start flex flex-col items-start w-full max-w-[550px] overflow-hidden mt-4 text-[32px] sm:text-[50px] font-Anton'>
//         <motion.div
//           style={{
//             x: move,
//             transition: "all 1s",
//           }}
//           transition={{
//             duration: 0.4,
//             ease: "linear",
//           }}
//           className={`text-texts`}
//         >
//           {Math.round((move / isHeight) * 100)}
//           <span className='text-button'>%</span>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LoadingPage;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingPage = (): JSX.Element => {
  const spans = Array.from({ length: 20 }, (_, i) => i);
  const [move, setMove] = useState<number>(0);
  const [isHeight, setIsHeight] = useState<number>(1); // پیش‌فرض گذاشتیم 1 تا undefined نباشه

  useEffect(() => {
    const progress = document
      .querySelector(".ss")
      ?.getBoundingClientRect().width;

    if (!progress || move === progress) return;
    setIsHeight(progress);

    const movement = progress / 6;

    const interval: NodeJS.Timeout = setInterval(() => {
      setMove((value) => value + movement);
    }, 600);

    return () => clearInterval(interval);
  }, [move]);

  return (
    <div className='w-screen h-screen min-h-screen min-w-screen flex justify-center items-center flex-col padding-x'>
      <div className='h-fit overflow-hidden relative text-[50px] sm:text-[90px]'>
        <motion.p
          initial={{ transform: "translateY(0)" }}
          animate={{ transform: "translateY(-100%)" }}
          transition={{ duration: 1, delay: 3.5, ease: "linear" }}
          className='mb-4 font-Anton uppercase text-texts'
        >
          Loading <span className='inline-block dotTop'>.</span>
          <span className='inline-block dotDown'>.</span>
          <span className='inline-block dotTop'>.</span>
        </motion.p>
        <motion.p
          initial={{ transform: "translateY(120%)" }}
          animate={{ transform: "translateY(0)" }}
          transition={{ duration: 1, delay: 3.5, ease: "linear" }}
          className='mb-4 font-Anton uppercase text-texts bottom-0 absolute z-50'
        >
          Welcome
        </motion.p>
      </div>

      <div className='w-full max-w-[550px] h-[60px] border-4 border-texts rounded-sm p-2 flex items-center gap-1 transition-all duration-300 ease-linear ss'>
        {spans.map((item) => (
          <motion.span
            key={item}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: (item + 1) * 0.2 }}
            className='w-1/20 h-full inline-block bg-texts'
          ></motion.span>
        ))}
      </div>

      <div className='justify-start flex flex-col items-start w-full max-w-[550px] overflow-hidden mt-4 text-[32px] sm:text-[50px] font-Anton'>
        <motion.div
          style={{ x: move, transition: "all 1s" }}
          transition={{ duration: 0.4, ease: "linear" }}
          className='text-texts'
        >
          {Math.round((move / isHeight) * 100)}
          <span className='text-button'>%</span>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingPage;
