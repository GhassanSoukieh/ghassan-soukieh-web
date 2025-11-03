"use client";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import ScrollFader from "../Components/ScrollFader";
import Intro from "@/Components/Intro";

const text =
  "I grew up in an academic and cultured environment where technology was a natural part of everyday life. At the age of eight, I got my first computer, which became the starting point of my passion for technology. The computer quickly became my best companion, and my curiosity drove me to explore and learn everything about how it worked. Even at a young age, I began experimenting.";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-centerleading-none ">
      <ScrollFader animationDurationDirection="Up">
        <Hero />
      </ScrollFader>
      <ScrollFader animationDurationDirection="Down">
        <Intro />
      </ScrollFader>
      <Footer />
    </div>
  );
}
