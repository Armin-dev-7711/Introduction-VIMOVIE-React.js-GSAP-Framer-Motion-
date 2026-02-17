import HeadSections from "@/Components/Global/HeadSections";
import Span from "@/Components/Global/Span";
import ContactForms from "./ContactForms";

const Contact = (): JSX.Element => {
  return (
    <div className='w-full padding-x mt-56 py-4'>
      <div className='max-container'>
        <Span personalStyle='-translate-y-[40px]'>Contact us</Span>
        <HeadSections
          header={<>Get in Touch</>}
          description={
            <>
              Have questions or suggestions? We're here to help! Contact us and
              let’s make your about <span className='text-button'>VI</span> MO
              <span className='text-button'>VI</span>E experience even better.
            </>
          }
        />
        <ContactForms />
      </div>
    </div>
  );
};

export default Contact;
