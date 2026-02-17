import Button from "@/Components/Global/Button";
import Span from "@/Components/Global/Span";
import { AboutSix } from "@/assets/About/index";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineOfficeBuilding,
  HiOutlinePhone,
} from "react-icons/hi";

const ContactForms = () => {
  const anim = function (variants: object): object {
    return {
      initial: "initial",
      whileInView: "enter",
      variants,
    };
  };

  const imgAnimation = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  const formAnimation = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "anticipate",
      },
    },
  };
  const socialAnimation = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "anticipate",
      },
    },
  };

  return (
    <div className='mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12'>
      <motion.div
        viewport={{
          once: true,
        }}
        {...anim(formAnimation)}
        className='p-4 bx-shadow w-full relative rounded-sm'
      >
        <Span>Get in touch</Span>
        <h3 className='font-Anton uppercase text-h5 sm:text-h3 mt-4 text-texts leading-none'>
          {`Let's chat reach out to us`.split(" ").map((item, index) => (
            <motion.span
              className='inline-block mr-[7px] will-change-transform'
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "anticipate",
              }}
            >
              {item}
            </motion.span>
          ))}
        </h3>
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "linear",
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className='text-paragraph text-p font-Roboto leading-[1.5] mt-4 will-change-transform'
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, alias
          vel quasi repudiandae quia corporis harum culpa pariatur obcaecati
          officiis?
        </motion.p>

        <div className='w-full h-[1px] bg-paragraph my-12' />
        <form>
          <div className='w-full flex justify-between items-start gap-6'>
            <div className='flex flex-col justify-start items-start basis-[50%] gap-6'>
              <label
                htmlFor='firstname'
                className='font-Anton sm:text-h5 text-h6 text-paragraph uppercase leading-0'
              >
                First Name
              </label>
              <input
                type='text'
                name='firstname'
                id='firstname'
                className='w-full h-[50px] rounded-sm bg-primary/50 px-2 font-Roboto text-paragraph text-p inline-block'
              />
            </div>
            <div className='flex flex-col justify-start items-start basis-[50%] gap-6'>
              <label
                htmlFor='lastname'
                className='font-Anton sm:text-h5 text-h6 text-paragraph uppercase leading-0'
              >
                Last Name
              </label>
              <input
                type='text'
                name='lastname'
                id='lastname'
                className='w-full h-[50px] rounded-sm bg-primary/50 px-2 font-Roboto text-paragraph text-p inline-block'
              />
            </div>
          </div>

          <div className='flex flex-col justify-start items-start gap-6 mt-10'>
            <label
              htmlFor='emailaddress'
              className='font-Anton sm:text-h5 text-h6 text-paragraph uppercase leading-0'
            >
              Email Address
            </label>
            <input
              type='email'
              name='emailaddress'
              id='emailaddress'
              className='w-full h-[50px] rounded-sm bg-primary/50 px-2 font-Roboto text-paragraph text-p inline-block'
            />
          </div>

          <div className='flex flex-col justify-start items-start gap-6 mt-10'>
            <label
              htmlFor='description'
              className='font-Anton sm:text-h5 text-h6 text-paragraph uppercase leading-0'
            >
              Message
            </label>
            <textarea
              name='description'
              id='description'
              className='w-full resize-none h-[200px] rounded-sm bg-primary/50 p-2 font-Roboto text-paragraph text-p inline-block'
            />
          </div>
          <div className='my-10 w-full flex gap-4 sm:gap-2 items-center justify-start h-auto'>
            <input
              type='checkbox'
              name='policycheck'
              id='policycheck'
              className='bg-transparent checked:bg-primary peer-checked:bg-primary'
            />
            <label
              htmlFor='policycheck'
              className='text-paragraph text-p font-Roboto text-wrap leading-[1.5]'
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </label>
          </div>
          <Button>Send message</Button>
        </form>
      </motion.div>
      <div className='p-2 rounded-sm flex flex-col gap-4 max-md:h-[886px]'>
        <div className='basis-[60%] rounded-sm'>
          <motion.img
            {...anim(imgAnimation)}
            viewport={{
              once: true,
            }}
            src={AboutSix}
            alt='contact-image'
            className='w-full h-full object-cover rounded-sm'
          />
        </div>
        <motion.div
          viewport={{
            once: true,
          }}
          {...anim(socialAnimation)}
          className='basis-[40%] p-4 rounded-sm bx-shadow flex lg:justify-between max-lg:gap-6 max-lg:flex-col max-lg:justify-end items-center max-lg:items-start overlfow-y-scroll'
        >
          <div className='flex flex-col justify-between items-start gap-4 lg:gap-4'>
            <div className='flex gap-4 items-center'>
              <div className='w-[50px] h-[50px] rounded-full inline-flex justify-center items-center bg-primary/50'>
                <HiOutlineMail className='text-button text-h5' />
              </div>
              <div>
                <h6 className='font-Anton text-texts sm:text-h5 text-h6 uppercase'>
                  phone
                </h6>
                <p className='text-paragraph text-p font-Roboto'>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='w-[50px] h-[50px] rounded-full inline-flex justify-center items-center bg-primary/50'>
                <HiOutlinePhone className='text-button text-h5' />
              </div>
              <div>
                <h6 className='font-Anton text-texts sm:text-h5 text-h6 uppercase'>
                  address
                </h6>
                <p className='text-paragraph text-p font-Roboto'>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <div className='flex gap-4 items-center'>
              <div className='w-[50px] h-[50px] rounded-full inline-flex justify-center items-center bg-primary/50'>
                <HiOutlineOfficeBuilding className='text-button text-h5' />
              </div>
              <div>
                <h6 className='font-Anton text-texts sm:text-h5 text-h6 uppercase'>
                  Email
                </h6>
                <p className='text-paragraph text-p font-Roboto'>
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
          <div className='max-lg:self-end'>
            <div className='border-8 border-double border-paragraph w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] inline-flex justify-center items-center rounded-full relative'>
              <motion.div
                animate={{ transform: "rotate(360deg)" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className='border-dashed border-4 border-paragraph w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full'
              ></motion.div>
              <p className='text-h2 sm:text-h1 text-button font-Anton absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
                VI
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForms;
