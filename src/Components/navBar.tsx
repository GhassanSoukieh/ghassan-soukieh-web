import React from "react";

const menu = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-10 h-12 text-[var(--pageCustom)] hover:scale-110 transition-transform duration-300 cursor-pointer"
  >
    <path d="M21 5H3" />
    <path d="M15 12H3" />
    <path d="M17 19H3" />
  </svg>
);

const NavBar = () => {
  return (
    <div className="flex items-start text-center myFont gap-10 mt-4 ml-6 w-[15rem] fixed z-999999">
      {menu}
    </div>
  );
};

export default NavBar;
