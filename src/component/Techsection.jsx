import React from "react";
import BorderGlow from "../component/BorderGlow";
import { div } from "motion/react-client";

const TechSection = ({ title, icons }) => {
  return (
    <BorderGlow
      edgeSensitivity={30}
      glowColor="40 80 80"
      backgroundColor="#060010"
      borderRadius={28}
      glowRadius={40}
      glowIntensity={1}
      coneSpread={25}
      animated={false}
      colors={["#c084fc", "#f472b6", "#38bdf8"]}
      className="mb-3"
    >
      <div className="flex flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-evenly sm:px-6 lg:mx-50 lg:py-10">
        {/* Title */}
        <span className="text-base sm:text-lg font-serif text-primary-foreground hover:text-primary text-center sm:text-left break-words">
          {title}
        </span>

        {/* Icons */}
        <span className="flex flex-wrap items-center justify-center gap-3 sm:justify-around sm:gap-5">
          {icons.map((Icon, index) => (
            <Icon
              key={index}
              size={30}
              className="transition-transform duration-300 hover:scale-125 hover:-translate-y-1 hover:text-secondary-foreground"
            />
          ))}
        </span>
      </div>
    </BorderGlow>
  );
};

export default TechSection;
