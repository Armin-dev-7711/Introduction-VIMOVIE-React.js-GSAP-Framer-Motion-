type Props = {
  children: React.ReactNode;
  event?: () => void;
};

const Button = ({ children, event }: Props): JSX.Element => {
  return (
    <button
      onClick={event}
      className='h-[80px] text-h4 uppercase font-Anton rounded-md w-full inline-flex justify-center items-center bg-button text-primary cursor-pointer '
    >
      {children}
    </button>
  );
};

export default Button;
