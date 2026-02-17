import Span from "@/Components/Global/Span";
import { TestimonialData } from "@/shared/data";
// import { motion } from "framer-motion";

const TestimonialCards = (): JSX.Element => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-3 mt-14 gap-y-12 gap-x-6'>
      {TestimonialData.map((item, index) => (
        <div
          key={index}
          className='h-[550px] max-lg:h-[650px] relative bx-shadow rounded-sm backdrop-blur-3xl w-full overflow-hidden p-4 flex flex-col'
        >
          <div className='absolute top-0 right-0'>
            <img
              src={item.person}
              alt='personal-image'
              className='w-[200px] h-[200px] rounded-bl-full object-cover'
            />
          </div>
          <div className='mt-auto flex flex-col items-start gap-4'>
            <div>
              <span className='bg-gradient-to-r from-paragraph to-transparent w-[40px] h-[40px] triengle-path rounded-bl-sm inline-block rounded-tr-sm mr-2' />
              <span className='bg-gradient-to-r from-paragraph to-transparent w-[40px] h-[40px] triengle-path rounded-bl-sm inline-block rounded-tr-sm' />
            </div>
            <h3 className='text-h5 sm:text-h3 text-texts font-Anton leading-none uppercase'>
              {item.name}
            </h3>
            <p className='text-p text-paragraph font-Roboto leading-[1.5]'>
              {item.description}
            </p>
            <Span personalStyle='cursor-pointer'>{item.mail}</Span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;
