import HeadSections from "@/Components/Global/HeadSections";
import Span from "@/Components/Global/Span";
import Questions from "./Questions";

const FAQ = (): JSX.Element => {
  return (
    <div className='w-full padding-x py-4 mt-56'>
      <div className='max-container'>
        <Span personalStyle='-translate-y-[40px]'>FAQ</Span>
        <HeadSections
          header={<>Frequently Asked Questions</>}
          description={
            <>
              Got questions about <span className='text-button'>VI</span> MO
              <span className='text-button'>VI</span>E? Check out our frequently
              asked questions to find quick answers and make the most of your
              streaming experience!
            </>
          }
        />
        <Questions />
      </div>
    </div>
  );
};

export default FAQ;
