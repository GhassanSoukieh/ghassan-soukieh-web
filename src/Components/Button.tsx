type buttonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = (buttonProps: buttonProps) => {
  return (
    <button
      className={`bg-(--orangeCustom) text-white myFont text-xl lg:text-3xl p-3 text-nowrap lg:py-4 lg:px-6 rounded hover:bg-(--golden) transition-all duration-300 ease-in-out transform hover:scale-105 ${buttonProps.className} cursor-pointer  `}
      onClick={buttonProps.onClick}
    >
      {buttonProps.text}
    </button>
  );
};

export default Button;
