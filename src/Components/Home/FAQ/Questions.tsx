// import { motion } from "framer-motion";
// import Question from "./Question";

// const Questions = (): JSX.Element => {
//   return (
//     <div className='w-full mt-14'>
//       <motion.div layout className='w-full grid gap-y-12'>
//         <Question />
//         <Question />
//         <Question />
//         <Question />
//         <Question />
//       </motion.div>
//     </div>
//   );
// };

// export default Questions;
import { motion } from "framer-motion";
import Question from "./Question";
import { FAQData } from "@/shared/data";

const Questions = (): JSX.Element => {
  return (
    <div className='w-full mt-14'>
      <motion.div
        layout='position'
        transition={{ duration: 1, ease: "linear" }}
        className='w-full grid gap-y-12 will-change-transform'
      >
        {FAQData.map((item, index) => (
          <Question key={index} index={index} items={item} />
        ))}
      </motion.div>
    </div>
  );
};

export default Questions;
