import { useEffect } from "react";
import { animate } from "motion";

export default function AnimatedHeading() {
  useEffect(() => {
    animate(".heading", 
  { scale: [0.4, 1], opacity: [0, 1] }, 
  { ease: "easeInOut", duration: 1.2 }
);

  }, []);

  return (
    <h1 className="heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white">
  GOVARTHANAN D
</h1>

  );
}
