const Footer = () => {
  return (
    <div className="w-full bg-(--orangeCustom) h-full flex flex-col myFont text-[4rem] md:text-[9rem] text-(--beigeCustom)">
      <div className="justify-center items-center text-center flex-1 mt-20 mb-10 group cursor-pointer">
        <span className="relative">
          Work
          <span className="absolute bottom-7 left-0 w-0 h-1 bg-(--beigeCustom) transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
      <div className="justify-center items-center text-center flex-1 mb-10 group cursor-pointer">
        <span className="relative">
          ABOUT
          <span className="absolute bottom-7 left-0 w-0 h-1 bg-(--beigeCustom) transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
      <div className="justify-center items-center text-center flex-1 mb-10 group cursor-pointer">
        <span className="relative">
          CONTACT
          <span className="absolute bottom-7 left-0 w-0 h-1 bg-(--beigeCustom) transition-all duration-300 group-hover:w-full"></span>
        </span>
      </div>
    </div>
  );
};
export default Footer;
