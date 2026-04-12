import React from "react";
import {AnimatedBorderButton} from "../component/AnimatedBorderButton"
import FloatingLines from "../component/FloatingLines";
import TiltedCard from "../component/TiltedCard";
import { Dot } from "lucide-react";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  Download,
} from "lucide-react";
import { Buttons } from "../shared-items/Buttons";
import profileImg from "../assets/meriphoto.jpeg";
import ColorBends from "../component/ColorBends"

export const Hero = () => {
  return (
    <section
      id="about"
      className="relative  overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0">
         <ColorBends
  colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
  rotation={0}
  speed={0.2}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  parallax={0.5}
  noise={0.1}
  transparent
  autoRotate={0}
  color=""
    />; 
      </div>
      <div className="flex  mt-25   w-full justify-evenly ">
        <div className="flex flex-col  left  pb-10">
          <span className="text-md flex border rounded px-2 text-primary w-fit my-8 animate-fade-in animation-delay-100 rounded-full animate-pulse">
            Electrical Engineer • React Specialist
          </span>
          <h1 className="text-bold text-5xl md:text-6xl lg:text-7xl my-5 leading-tight animate-fade-in animation-delay-100 ">
            Crafting <span className="text-primary glow-text">digital</span>
            <br />
            experience with
            <br />
            <span className="font-serif italic font-normal text-white">
              precision
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 ">
            Hi, I'm Vedant Gupta— a thriving electrical engineer specializing in
            React, Next.js, and TypeScript. I build scalable, performant web
            applications that users love.
          </p>
          <div className="my-8 flex justify-between flex-wrap w-fit gap-8 animate-fade-in animation-delay-300">
            <a href="#contactus">
              <Buttons className="cursor-target flex items-center gap-2">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Buttons>
            </a>
            <AnimatedBorderButton className="cursor-target animate-fade-in animation-delay-300">
              <Download className="w-5 h-5" />
              Download CV
            </AnimatedBorderButton>
          </div>

          <div className="flex space-x-6 animate-fade-in animation-delay-400   ">
            <div className="text-muted-foreground text-sm flex items-center">
              Follow me:
            </div>
            {[
              { icon: Github, href: "https://github.com/Vedant8075" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="p-2 cursor-target glass hover:bg-primary/10 hover:bg-primary/10 hover:text-primary"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className=" right relative hidden md:block top-40 flex items-center justify-center ">
          <TiltedCard
            imageSrc={profileImg}
            altText="Vedant Gupta"
            captionText="Vedant Gupta"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={16}
            scaleOnHover={1.6}
            showMobileWarning={false}
            showTooltip
            displayOverlayContent
            overlayContent={
              <p className="tilted-card-demo-text">Vedant Gupta</p>
            }
          />
        </div>
      </div>
    </section>
  );
};

{/* <ColorBends
  colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
  rotation={0}
  speed={0.2}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  parallax={0.5}
  noise={0.1}
  transparent
  autoRotate={0}
  color=""
/>; */}
{/* <FloatingLines
  linesGradient={["#f0f2f5", "#20b2a6", "#0f1418"]}
  animationSpeed={1}
  interactive
  bendRadius={5}
  bendStrength={-0.5}
  mouseDamping={0.05}
  parallax
  parallaxStrength={0.2}
/>; */}
