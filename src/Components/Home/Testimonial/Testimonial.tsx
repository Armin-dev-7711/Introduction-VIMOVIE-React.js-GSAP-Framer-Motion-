import HeadSections from "@/Components/Global/HeadSections";
import Span from "@/Components/Global/Span";
import TestimonialCards from "./TestimonialCards";

const Testimonial = (): JSX.Element => {
  return (
    <div className='w-full padding-x mt-56 py-4'>
      <div className='max-container'>
        <Span personalStyle='-translate-y-[40px]'>Testimonial</Span>
        <HeadSections
          header={<>What Our Users Say</>}
          description={
            <>
              Discover what movie lovers think about{" "}
              <span className='text-button'>VI</span> MO
              <span className='text-button'>VI</span>E! Real reviews from real
              users who enjoy the ultimate streaming experience.
            </>
          }
        />
        <TestimonialCards />
      </div>
    </div>
  );
};

export default Testimonial;
