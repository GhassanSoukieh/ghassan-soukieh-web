"use client";
import Hero from "@/Components/Hero";
import ScrollFader from "../Components/ScrollFader";
import Intro from "@/Components/Intro";
import Button from "@/Components/Button";
import navigat from "next/navigation";

export default function Home() {
  const router = navigat.useRouter();

  return (
    <div className="flex flex-col items-center justify-centerleading-none ">
      <ScrollFader animationDurationDirection="Up">
        <Hero />
      </ScrollFader>
      <ScrollFader animationDurationDirection="Down">
        <Intro />
        <div className="flex flex-row gap-10 mt-10 mb-20 lg:p-4 w-[30%] items-center justify-center">
          <Button
            text="See my projects"
            onClick={() => router.push("/projects")}
            className=""
          />
          <Button
            text="More about me "
            onClick={() => router.push("/about-me")}
          />
        </div>
      </ScrollFader>
    </div>
  );
}
