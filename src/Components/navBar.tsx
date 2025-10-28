import Link from "next/link";

const NavBar = () => {
  const itemStyle =
    "text-4xl p-5 rounded-2xl hover:bg-orange-500/10 hover:cursor-pointer";
  return (
    <div className="flex items-center justify-center text-center myFont gap-10 mt-4">
      <Link href={"/projects"} className={itemStyle}>
        Work
      </Link>
      <div className={itemStyle}>About</div>

      <div className={itemStyle}>Contact</div>
    </div>
  );
};

export default NavBar;
