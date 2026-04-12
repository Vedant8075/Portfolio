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
      <div className="flex items-center justify-evenly gap-4 py-10 lg:mx-50 ">
        {/* Title */}
        <span className="text-lg font-serif text-primary-foreground hover:text-primary">
          {title}
        </span>

        {/* Icons */}
        <span className="flex flex-wrap items-center justify-around gap-5">
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
