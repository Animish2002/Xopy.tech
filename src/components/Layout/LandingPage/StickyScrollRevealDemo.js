import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "../../../utils/cn.ts"; // Adjust the import path as needed
import image1 from "../../../Assets/image1.png";
import image2 from "../../../Assets/image2.png";
import image3 from "../../../Assets/image3.jpg";

const content = [
  {
    title: "A Cloud Based Platform.",
    description:
      "Reduce human errors and interventions and say yes to a streamlined platform for facilitating safe and secure transfer.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image1}
          className="h-full w-full object-cover border-2 border-black rounded-[30px] "
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Convenience",
    description:
      "The streamlined process reduces confusion and raises the convenience.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image2}
          className="h-full w-full object-cover border-2 border-black rounded-[30px] "
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Secure and direct",
    description:
      "Adds an added layer of security to the traditional methods with added convenience and straightforward method.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image3}
          className="h-full w-full object-cover border-2 border-black rounded-[30px] "
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["white"];
  const linearGradients = [""];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[36rem] p-10 overflow-y-auto hide-scrollbar flex justify-center relative space-x-2 rounded-md "
      ref={ref}
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-[160px]">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-grey-500"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-lg text-gray-600 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block h-[450px] w-[600px] rounded-md bg-white sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};

export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
