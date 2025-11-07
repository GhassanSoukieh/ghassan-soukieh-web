type buttonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = (buttonProps: buttonProps) => {
  return (
    <button
      className={`bg-(--orangeCustom) text-white myFont text-xl lg:text-3xl  py-4 px-6 rounded hover:bg-(--golden) transition-all duration-300 ease-in-out transform hover:scale-105 ${buttonProps.className}`}
      onClick={buttonProps.onClick}
    >
      {buttonProps.text}
    </button>
  );
};

export default Button;
