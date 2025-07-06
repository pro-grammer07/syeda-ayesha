import React from "react";
import { socials } from "../constants"; // make sure this contains icon + link
import SectionWrapper from '../hoc'

const Social = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {socials.map((social) => (
        <div
          key={social.name}
          onClick={() => window.open(social.link, "_blank")}
          className="w-24 h-28 flex flex-col items-center justify-center bg-gray-800 rounded-xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-md"
        >
          <img
            src={social.icon}
            alt={social.name}
            className="w-12 h-12 object-contain"
          />
          <p className="text-white text-sm mt-2">{social.name}</p>
        </div>
      ))}
    </div>
  );
};



export default SectionWrapper(Social, "social");