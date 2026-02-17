import { HomeOne } from "@/assets";

const ItemSearch = (): JSX.Element => {
  return (
    <div className='2xl:basis-[48%] max-lg:h-[280px] h-[340px] relative rounded-sm overflow-hidden cursor-pointer'>
      <img src={HomeOne} className='w-full h-full object-cover' alt='' />
      <div className='w-full h-full flex justify-start items-end p-4 absolute top-0 left-0 layer'>
        <div className='flex flex-col gap-2'>
          <h4 className='text-h6 sm:text-h4 text-button font-Anton capitalize'>
            House of dragon
          </h4>
          <p className='text-small sm:text-p text-paragraph font-Roboto'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <button
        className='bg-texts text-button font-[600] order-2 w-[40px] h-[40px] rounded-full inline-flex
               items-center justify-center cursor-pointer mr-2 absolute right-0 top-0 m-4'
      >
        9.2
      </button>
    </div>
  );
};

export default ItemSearch;
