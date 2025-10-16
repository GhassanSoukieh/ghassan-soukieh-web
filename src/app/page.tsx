import Image from "next/image";
import svg from "../../public/icons/Alignjustify.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-cols-11 grid-rows-9 items-center text-white text-3xl p-10">
      <div className="col-start-1 text-8xl myFont"> GHASSAN</div>
      <div className="col-start-3 row-start-2 text-8xl myFont"> SOUKIEH</div>
      <Image
        src={svg}
        alt="Align justify icon "
        className="col-start-12 justify-self-center"
      />
      <Link
        className="col-start-5 row-start-7 col-span-3 whitespace-nowrap border-2 py-3 rounded-2xl text-center myTextFont "
        href="/about-me"
      >
        Who I am ?
      </Link>
      <Link
        href="/projects"
        className="col-start-5 row-start-8 col-span-3 whitespace-nowrap border-2 py-3 rounded-2xl text-center myTextFont"
      >
        Projects
      </Link>
    </div>
  );
}
