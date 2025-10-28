import Project from "../../Components/Project";
import Link from "next/link";
import arrow from "../../../public/icons/icons";

export default function Home() {
  return (
    <div>
      <div className=" text-7xl myFont pt-10 text-center pb-10 grid grid-cols-3">
        <div className="col-start-1 items-center  justify-center flex">
          <Link href="/">{arrow}</Link>
        </div>
        <div>Projects</div>
      </div>
      <div className="flex flex-col gap-10 px-20 w-3/4 absolute left-1/2 -translate-x-1/2">
        <Project />
      </div>
    </div>
  );
}
