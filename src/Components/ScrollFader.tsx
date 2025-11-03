import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollFaderProps = {
  children: React.ReactNode;
  animationDurationDirection?: "Up" | "Down";
};

const ScrollFader = ({
  children,
  animationDurationDirection,
}: ScrollFaderProps) => {
  gsap.registerPlugin(ScrollTrigger);
  const componentRef = useRef(null);
  const [componentIsVisible, setComponentIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Is visible:", entry.isIntersecting);
        setComponentIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) observer.observe(componentRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!componentIsVisible) {
      return;
    }
    console.log("Component is visible:", componentIsVisible);

    const isUp = animationDurationDirection === "Up";

    gsap.set(componentRef.current, {
      opacity: isUp ? 1 : 0,
      y: isUp ? 0 : 100,
      scale: isUp ? 1 : 0.8,
    });

    gsap.to(componentRef.current, {
      opacity: isUp ? 0 : 1,
      y: isUp ? 100 : 0,
      scale: isUp ? 0.8 : 1,
      ease: "none",
      scrollTrigger: {
        trigger: componentRef.current,
        start: isUp ? "top top" : "top 80%",
        end: isUp ? "bottom top" : "center center",
        scrub: 1,
        onUpdate: (self: any) => {
          console.log("Scroll progress:", self.progress);
        },
      },
    });
  }, [componentIsVisible]);
  return (
    <div
      ref={componentRef}
      className="flex flex-col items-center justify-center w-full"
    >
      {children}
    </div>
  );
};

export default ScrollFader;
