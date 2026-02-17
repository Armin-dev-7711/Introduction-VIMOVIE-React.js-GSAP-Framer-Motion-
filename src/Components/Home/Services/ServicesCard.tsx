import Button from "@/Components/Global/Button";
import { DataServicesCard } from "@/shared/data";
import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";

const ServicesCard = (): JSX.Element => {
  return (
    <div className='mt-14 grid grid-cols-1 md:grid-cols-3 gap-x-6 max-md:gap-y-12'>
      {DataServicesCard.map((item, index) => (
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
            delay: index * 0.1,
          }}
          key={index}
          className={`rounded-sm w-full p-4 h-[750px] relative flex flex-col ${item.bgImage}`}
        >
          <h3 className='text-h5 sm:text-h3 font-Anton uppercase text-texts leading-none mb-4'>
            {item.title}
          </h3>
          <p className='text-paragraph text-p leading-[1.5] font-Roboto mb-24'>
            {item.description}
          </p>
          <p className='font-Anton text-h1 text-texts leading-none flex justify-start items-end gap-1 border-b border-paragraph/40 pb-8'>
            <span>{item.price.value}</span>
            <span className='text-texts/30 text-h5'>{item.price.type}</span>
          </p>
          <div className='flex flex-col justify-start items-start mt-8 gap-6'>
            {item.objective.map((objc, objcIndex) => (
              <div
                key={objcIndex}
                className='flex justify-start items-center gap-4'
              >
                <span>
                  <HiCheck className='text-h4 text-button' />
                </span>
                <p className='font-Roboto text-paragraph text-p'>{objc}</p>
              </div>
            ))}
          </div>

          <div className='w-full mt-auto border-t border-paragraph/40 pt-8'>
            {/* <button className='h-[80px] text-h4 uppercase font-Anton rounded-md w-full inline-flex justify-center items-center bg-button text-primary cursor-pointer '>
              get started
            </button> */}

            <Button>get started</Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesCard;
