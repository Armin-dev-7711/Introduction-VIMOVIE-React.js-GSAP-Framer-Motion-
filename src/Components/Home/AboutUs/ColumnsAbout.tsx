import { AboutOne } from "@/assets/About/index";
import { PersonFive, PersonOne, PersonThree, PersonTwo } from "@/assets/Person";
// import { PersonImages } from "@/assets/Person";
import { motion } from "framer-motion";

const PersonImages: string[] = [PersonOne, PersonTwo, PersonThree, PersonFive];

const ColumnsAbout = (): JSX.Element => {
  const anim = function (variants: object): object {
    return {
      initial: "initial",
      whileInView: "enter",
      variants,
    };
  };

  const open = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "linear",
        delay: 0.5,
      },
    },
  };

  return (
    <div className='w-full mt-14 grid grid-cols-1 md:grid-cols-5 gap-4'>
      <div className='rounded-sm backdrop-blur-md bx-shadow md:col-start-[1] md:col-end-[4] min-h-[550px] max-sm:h-auto'>
        <div className='sm:w-[80%] sm:mr-auto w-full p-4 flex flex-col justify-between gap-8 h-full'>
          <div>
            <h3 className=' uppercase font-Anton overflow-hidden text-h5 leading-[1.5] text-texts sm:text-h3 mb-4'>
              {"We offer a diverse range of movies and series across various type to meet your specific needs"
                .split(" ")
                .map((item, index) => (
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
              className=' font-Roboto text-p text-paragraph leading-[1.5]'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              deserunt libero quod soluta perferendis! Voluptatum culpa facilis
              suscipit soluta ea dicta quae neque, cumque harum qui, minus
              officiis odit ab id corporis ipsum eligendi repudiandae illum
              autem. Molestias, at molestiae?
            </motion.p>
          </div>
          <div>
            <h3 className=' uppercase font-Anton overflow-hidden text-h5 leading-[1.5] text-texts sm:text-h3 mb-4'>
              {"We offer a diverse range of movies and series across various type to meet your specific needs"
                .split(" ")
                .map((item, index) => (
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
              className=' font-Roboto text-p text-paragraph leading-[1.5] will-change-transform'
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              deserunt libero quod soluta perferendis! Voluptatum culpa facilis
              suscipit soluta ea dicta quae neque, cumque harum qui, minus
              officiis odit ab id corporis ipsum eligendi repudiandae illum
              autem. Molestias, at molestiae?
            </motion.p>
          </div>
        </div>
      </div>
      <div className='rounded-sm backdrop-blur-md bx-shadow md:col-start-[4] md:col-end-[6] min-h-[550px] overflow-hidden'>
        <motion.img
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
            duration: 1.5,
            ease: "linear",
          }}
          src={AboutOne}
          alt='about-images'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='rounded-sm backdrop-blur-md bx-shadow md:col-start-[1] md:col-end-[4] min-h-[550px] overflow-hidden relative flex flex-col items-end justify-between p-4 gap-12'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{
            once: true,
          }}
          transition={{ duration: 1, ease: "linear", delay: 1 }}
          className='border-8 border-double border-paragraph w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] inline-flex justify-center items-center rounded-full '
        >
          <motion.div
            animate={{ transform: "rotate(360deg)" }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className='border-dashed border-4 border-paragraph w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] rounded-full'
          >
            <p className='text-h2 sm:text-h1 text-button font-Anton absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'>
              VI
            </p>
          </motion.div>
        </motion.div>
        <div className='sm:w-[80%] sm:mr-auto flex flex-col gap-2'>
          <div className='flex items-center'>
            {PersonImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  y: -100,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.7,
                  ease: "anticipate",
                }}
                className={`w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full p-1 overflow-hidden bg-[#2a2a2a] ${
                  index === 0 ? "" : "ml-[-12.5px]"
                }`}
              >
                <img
                  key={index}
                  src={item}
                  alt='person-images'
                  className='w-full h-full object-cover rounded-full'
                />
              </motion.div>
            ))}
          </div>
          <h3 className='uppercase font-Anton text-h5 text-texts sm:text-h3'>
            {`Our team consist of skilled developers and designers across, who create a beauty projects and give a nice experience`
              .split(" ")
              .map((item, index) => (
                <motion.span
                  className='inline-block mr-[7px]'
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
            className='text-paragraph text-p leading-[1.5] font-Roboto'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
            incidunt voluptatem odit eligendi mollitia, recusandae similique
            odio corrupti labore. Natus.
          </motion.p>
        </div>
      </div>
      <div className='rounded-sm backdrop-blur-md bx-shadow md:col-start-[4] md:col-end-[6] min-h-[550px] p-4 flex flex-col justify-between overflow-scroll md:overflow-auto gap-6'>
        <h3 className='text-texts font-Anton text-h5 uppercase md:text-h3 md:w-[80%] sm:mr-auto w-full '>
          {`Upgrade your account level by watching more movies and series.`
            .split(" ")
            .map((item, index) => (
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

        <div className='flex gap-4 w-full items-end'>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[50px] bg-paragraph'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[100px] bg-paragraph'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[150px] bg-paragraph'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[200px] bg-paragraph'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[300px] bg-button'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[220px] bg-paragraph'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[250px] bg-paragraph'
          ></motion.div>
          <motion.div
            {...anim(open)}
            className='w-full max-w-1/8 h-[230px] bg-paragraph'
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default ColumnsAbout;
