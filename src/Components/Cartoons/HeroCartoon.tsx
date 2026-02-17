// import React from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { Cartoon } from "@/assets/Cartoons";

// const HeroCartoon: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     document.body.style.overflowX = "hidden";
//     return () => {
//       document.body.style.overflowX = "auto";
//     };
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const scale = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 6]), {
//     stiffness: 100,
//     damping: 20,
//   });
//   const opacity = useSpring(useTransform(scrollYProgress, [0, 0.4], [1, 0]), {
//     stiffness: 100,
//     damping: 20,
//   });
//   const opacityTwo = useSpring(
//     useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
//     {
//       stiffness: 100,
//       damping: 20,
//     }
//   );

//   const y = useTransform(scrollYProgress, [0, 0.6], [10, -10]);
//   const blurAmount = useTransform(scrollYProgress, [0.4, 0.6], [15, 0]);
//   const filter = useTransform(blurAmount, (value) => `blur(${value}px)`);
//   return (
//     <div>
//       <div
//         ref={containerRef}
//         className='relative z-[-1] h-[300vh] min-h-[1900px]'
//       >
//         {/* Content behind the transparent part */}

//         {/* Transparent image that zooms */}
//         <div className='w-full h-screen min-h-[650px] sticky top-0 z-0 flex'>
//           <motion.img
//             src={Cartoon}
//             alt='Transparent Frame'
//             style={{ scale, opacity }}
//             className='sticky top-0 TransofrmOrigin h-full object-cover z-10 w-full shrink-0'
//           />

//           <video
//             className='w-full h-full object-cover absolute top-0 z-0 shrink-0'
//             muted
//             loop
//             autoPlay
//             controls
//           >
//             <source src='/src/assets/Cartoons/Anime.mp4' type='video/mp4' />
//           </video>
//           <div className='w-full h-full absolute top-0 left-0 layerHome' />

//           <h2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
//             {"welcome to vi cartoon".split(" ").map((word, index) => (
//               <motion.span
//                 style={{ y, opacity: opacityTwo, filter }}
//                 transition={{
//                   type: "tween",
//                   duration: 1,
//                   delay: index * 0.1,
//                 }}
//                 className={`text-texts font-Anton uppercase text-h1 inline-block mr-2`}
//                 key={index}
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroCartoon;
// import React from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
import { Cartoon } from "@/assets/Cartoons";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroCartoon: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frontRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(frontRef.current, {
        scale: 2.5,
        opacity: 0,
        duration: 2,
        ease: "none",
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power2.out" }
      );
    }, containerRef);

    // ⬇️ این تفاوت ایجاد می‌کند
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className='relative h-[200vh] bg-black'>
      <div className='sticky top-0 h-screen w-full overflow-hidden'>
        <video
          className='absolute inset-0 w-full h-full object-cover'
          muted
          loop
          autoPlay
          playsInline
        >
          <source src='/Anime.mp4' type='video/mp4' />
        </video>

        <h2
          ref={textRef}
          className='absolute w-full text-center flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-texts font-Anton uppercase text-h1 opacity-0'
        >
          welcome to vi cartoon
        </h2>

        <img
          ref={frontRef}
          src={Cartoon}
          alt='Foreground'
          className='absolute inset-0 w-full h-full object-cover will-change-transform origin-top z-10'
        />
      </div>
    </section>
  );
  // useEffect(() => {
  //   document.body.style.overflowX = "hidden";
  //   return () => {
  //     document.body.style.overflowX = "auto";
  //   };
  // }, []);

  // const { scrollYProgress } = useScroll();

  // const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // const scale = useTransform(scrollYProgress, [0, 0.2], [1, isMobile ? 4 : 6]);
  // const opacity = useTransform(
  //   scrollYProgress,
  //   [0, isMobile ? 0.05 : 0.1],
  //   [1, 0]
  // );
  // const opacityTwo = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // const y = useTransform(scrollYProgress, [0, 0.1], [10, -10]);
  // const blurAmount = useTransform(scrollYProgress, [0, 0.1], [15, 0]);
  // const filter = useTransform(blurAmount, (value) => `blur(${value}px)`);

  // return (
  //   <div className='relative h-[200vh] min-h-[1900px]'>
  //     <div className='w-full h-[100dvh] min-h-[650px] sticky top-0 flex items-center justify-center overflow-hidden'>
  //       {/* ویدیو بک‌گراند */}
  // <video
  //   className='absolute top-0 left-0 w-full h-full object-cover z-0'
  //   muted
  //   loop
  //   autoPlay
  //   playsInline
  // >
  //   <source src='/Anime.mp4' type='video/mp4' />
  // </video>

  //       {/* تصویر پارالاکس */}
  //       <motion.img
  //         src={Cartoon}
  //         alt='Transparent Frame'
  //         style={{ scale, opacity }}
  //         className='absolute top-0 left-0 w-full h-full object-cover object-bottom origin-top z-10'
  //       />

  //       {/* لایه نیمه شفاف */}
  //       <div className='absolute top-0 left-0 w-full h-full z-20 layerHome pointer-events-none' />

  //       {/* متن روی تصویر */}
  // <h2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
  //   {"welcome to vi cartoon".split(" ").map((word, index) => (
  //     <motion.span
  //       key={index}
  //       style={{ y, opacity: opacityTwo, filter }}
  //       transition={{
  //         type: "tween",
  //         duration: 1,
  //         delay: index * 0.1,
  //       }}
  //       className='text-texts font-Anton uppercase text-h1 inline-block mr-2'
  //     >
  //       {word}
  //     </motion.span>
  //   ))}
  // </h2>
  //     </div>
  //   </div>
  // );
};

export default HeroCartoon;
