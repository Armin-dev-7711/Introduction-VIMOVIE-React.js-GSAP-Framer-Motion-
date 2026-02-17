import { Brands } from "@/assets/Brands";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Banner = (): JSX.Element => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView: boolean = useInView(ref, { once: true });

  return (
    <div className='relative w-full h-full padding-x'>
      <div className='max-container'>
        <div
          ref={ref}
          key='banner'
          className={`${
            isInView ? "opacity-100" : "opacity-0"
          } w-full mt-24 py-4 min-h-[200px] flex items-center flex-wrap gap-8 max-sm:justify-center max-[1108px]:justify-start justify-between overflow-x-hidden transition-all duration-1000 ease-in`}
        >
          {Brands.map(
            (item, index): JSX.Element => (
              <motion.img
                key={index}
                alt='brand-logo'
                className='h-auto object-cover w-[100px] sm:w-[150px]'
                src={item}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
