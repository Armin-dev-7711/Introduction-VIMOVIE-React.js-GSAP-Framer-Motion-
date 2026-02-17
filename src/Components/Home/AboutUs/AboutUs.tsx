import Span from "@/Components/Global/Span";
import ColumnsAbout from "./ColumnsAbout";
import HeadSections from "../../Global/HeadSections";

const AboutUs = (): JSX.Element => {
  return (
    <div className='w-full padding-x mt-56 py-4'>
      <div className='max-container'>
        <Span personalStyle='-translate-y-[40px]'>About us</Span>
        <HeadSections
          header={
            <>
              about <span className='text-button'>VI</span> MO
              <span className='text-button'>VI</span>E
            </>
          }
          description={
            <>
              {" "}
              <span className='text-button'>VI</span> MO
              <span className='text-button'>VI</span>E is a dedicated platform
              for movie and series enthusiasts, offering a curated collection of
              the best cinematic and TV productions. With a modern user
              interface and a smooth experience, we strive to make watching
              movies and series more enjoyable for you. Stay up to date with{" "}
              <span className='text-button'>VI</span> MO
              <span className='text-button'>VI</span>E and discover the latest
              releases!{" "}
            </>
          }
        />
        <ColumnsAbout />
      </div>
    </div>
  );
};

export default AboutUs;
