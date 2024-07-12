import React from "react";
import { StickyScroll } from "./StickyScroll"; // Adjust the import path as needed
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.jpg";

const content = [
  {
    title: "A Cloud Based Platform.",
    description:
      "Reduce human errors and interventions and say yes to a streamlined platform for facilitating safe and secure transfer.",
    content: (
      <div className=" flex items-center justify-center text-white">
        <img
          src={image1}
          className=" object-cover border-2 border-black rounded-[30px] "
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

export function StickyScrollRevealDemo() {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
