import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  header: JSX.Element | string;
  description: JSX.Element | string;
};

const HeadSections = ({ header, description }: Props): JSX.Element => {
  const ref: React.MutableRefObject<null> = useRef(null);
  const isInView: boolean = useInView(ref, { once: true });

  return (
    <div ref={ref} className='w-full relative'>
      <motion.h2
        className={`text-h4 sm:text-h2 font-Anton will-change-transform leading-[1.2] uppercase text-texts mb-10 transition-all duration-1000 delay-300 ${
          isInView
            ? "opacity-100 translate-y-[0px]"
            : "opacity-0 translate-y-[40px]"
        }`}
      >
        {header}
      </motion.h2>
      <motion.p
        className={`text-p w-full max-w-[850px] will-change-transform text-start font-Roboto leading-[1.5] text-paragraph tracking-wide transition-all duration-1000 delay-500 ${
          isInView
            ? "opacity-100 translate-y-[0px]"
            : "opacity-0 translate-y-[40px]"
        }`}
      >
        {description}
      </motion.p>
    </div>
  );
};

export default HeadSections;
