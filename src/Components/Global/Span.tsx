import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  personalStyle?: string;
};

const Span = ({ children, personalStyle }: Props): JSX.Element => {
  const ref: React.MutableRefObject<null> = useRef(null);
  const isInView: boolean = useInView(ref, { once: true });
  return (
    <span
      ref={ref}
      className={`uppercase font-Anton text-button scale-y-[1.2] will-change-transform inline-block transform  tracking-wider transition-all duration-1000 ease-initial ${
        isInView
          ? `opacity-100  ${personalStyle}`
          : "opacity-0 translate-y-[0px]"
      }`}
    >
      {children}
    </span>
  );
};

export default Span;
