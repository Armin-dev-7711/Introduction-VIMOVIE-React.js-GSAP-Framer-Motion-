import HeadSections from "@/Components/Global/HeadSections";
import Span from "@/Components/Global/Span";
import ServicesCard from "./ServicesCard";

const Services = (): JSX.Element => {
  return (
    <div className='w-full padding-x mt-56 py-4'>
      <div className='max-container'>
        <Span personalStyle='-translate-y-[40px]'>Services</Span>
        <HeadSections
          header={
            <>
              Streaming Ser<span className='text-button'>vi</span>ces
            </>
          }
          description={
            <>
              Enjoy seamless streaming of your favorite movies and TV shows in
              high quality, anytime, anywhere.
            </>
          }
        />
        <ServicesCard />
      </div>
    </div>
  );
};

export default Services;
