import Image from "next/image";
import Ghassan from "../../../public/Ghassan.jpg";
import Link from "next/link";
import arrow from "../../../public/icons/icons";
import { Mail, Linkedin, Github } from "lucide-react";
import ScrollFader from "@/Components/ScrollFader";

const text = `I am Ghassan Soukieh, a software developer studying at Jönköping
University. My passion for technology started when I got my
first computer at eight, and it quickly grew from curiosity
into creativity — from 2D animation to coding. I love building
projects that mix design and logic, and I am always eager to
learn, improve, and collaborate with others.`;

const aboutMe = () => {
  return (
    <div className="flex flex-col w-[70%] mx-auto ">
      <div className="relative myFont text-9xl flex justify-center items-center py-2">
        <Link
          href={"/projects"}
          className="absolute left-8 top-1/2 transform -translate-y-1/2"
        >
          {arrow}
        </Link>
        <span className="text-(--golden)">About me</span>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 space-y-12">
        <div className="w-[40%] relative group">
          <div className="absolute -inset-1  rounded-full opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <ScrollFader animationDurationDirection="Up">
            <Image
              src={Ghassan}
              alt="About Me"
              className="relative w-full h-auto object-cover rounded-full shadow-2xl"
              width={1920}
              height={1080}
            />
          </ScrollFader>
        </div>

        <ScrollFader>
          <div className="max-w-4xl space-y-8">
            <div className="bg-black/20 rounded-2xl p-8 border border-white/10">
              <p className="textFont text-2xl leading-relaxed text-center">
                {text}
              </p>
            </div>
            <div className="bg-linear-to-r rounded-2xl p-8   text-center">
              <h3 className="myFont text-(--golden) text-8xl  mb-6">
                {"Let's connect"}
              </h3>
              <p className="textFont text-2xl leading-relaxed">
                If you made it here, I think{" "}
                <span className="text-(--beigeCustom) font-semibold">
                  we should talk
                </span>{" "}
                ✨
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="mailto:ghassansoukieh@gmail.com"
                  className="group flex items-center gap-3 bg-(--orangeCustom) hover:bg-(--golden) text-white px-6 py-4 rounded-full transition-all duration-300 textFont text-lg font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Mail size={20} className="group-hover:animate-bounce" />
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/ghassan-soukieh-5287b0336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-full transition-all duration-300 textFont text-lg font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Linkedin size={20} className="group-hover:animate-bounce" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/GhassanSoukieh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-full transition-all duration-300 textFont text-lg font-semibold hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Github size={20} className="group-hover:animate-bounce" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </ScrollFader>
      </div>
    </div>
  );
};

export default aboutMe;
