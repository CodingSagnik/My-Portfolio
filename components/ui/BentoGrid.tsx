"use client";

import { useState } from "react";
import { FiDownload } from "react-icons/fi";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";


import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Tech stack items with icons and labels (17 items total)
  const techStack = [
    { name: "Java", icon: "/java.svg" },
    { name: "Python", icon: "/python.svg" },
    { name: "C", icon: "/cprog.svg" },
    { name: "C++", icon: "/cpp.svg" },
    { name: "Matlab", icon: "/matlab.svg" },
    { name: "R", icon: "/r.svg" },
    { name: "Shopify", icon: "/shopify.svg" },
    { name: "MS SQL", icon: "/mssql.svg" },
    { name: "Vercel", icon: "/vercel.svg" },
    { name: "Git", icon: "/gitog.svg" },
    { name: "JavaScript", icon: "/js.svg" },
    { name: "TypeScript", icon: "/typescript.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "Node.js", icon: "/nodejs.svg" },
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "HTML", icon: "/html.svg" },
    { name: "TailwindCSS", icon: "/tailwind.svg" }
  ];

  const [downloaded, setDownloaded] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const defaultOptions = {
    loop: false,
    autoplay: downloaded,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to your resume file in public folder
    link.download = 'Sagnik_Ray_Resume.pdf'; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success animation with new key to force restart
    setDownloaded(true);
    setAnimationKey(prev => prev + 1);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setDownloaded(false);
    }, 3000);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-3 p-3 lg:p-6"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          {id !== 3 && (
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10 whitespace-nowrap">
            {description}
          </div>
          )}
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          {id !== 3 && (
          <div
            className={`font-sans text-lg lg:text-3xl font-bold z-10 text-left ${id === 5 ? 'max-w-[18ch]' : 'max-w-md'}`}
          >
            {title}
          </div>
          )}

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}

          {/* Tech stack grid layout */}
          {id === 3 && (
            <div className="flex flex-col h-full w-full relative">
              {/* Top row - 7 boxes */}
              <div className="grid grid-cols-7 gap-2 mb-3">
                {techStack.slice(0, 7).map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center p-2 bg-[#10132E] rounded-lg border border-white/[0.1] hover:border-purple/[0.3] transition-all duration-300 hover:scale-105 aspect-square"
                  >
                    <div className="w-9 h-9 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="max-w-9 max-h-9 w-auto h-auto object-contain filter brightness-90"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Middle section with text on left and 3 boxes on right */}
              <div className="flex justify-between items-center mb-3 flex-1">
                {/* Text content - matching original styling exactly */}
                <div className="flex flex-col justify-center">
                  <div className="font-sans font-extralight md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    I constantly try to improve
                  </div>
                  <div className="font-sans text-lg lg:text-3xl font-bold z-10 text-left max-w-md">
                    My tech stack
                  </div>
                </div>
                
                {/* Right side - 3 boxes horizontally with same gap as horizontal boxes */}
                <div className="flex flex-row gap-2">
                  {techStack.slice(7, 10).map((tech, i) => (
                    <div
                      key={i + 7}
                      className="flex flex-col items-center justify-center p-2 bg-[#10132E] rounded-lg border border-white/[0.1] hover:border-purple/[0.3] transition-all duration-300 hover:scale-105 w-14 h-14"
                    >
                      <div className="w-9 h-9 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="max-w-9 max-h-9 w-auto h-auto object-contain filter brightness-90"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom row - 7 boxes */}
              <div className="grid grid-cols-7 gap-2">
                {techStack.slice(10, 17).map((tech, i) => (
                  <div
                    key={i + 10}
                    className="flex flex-col items-center justify-center p-2 bg-[#10132E] rounded-lg border border-white/[0.1] hover:border-purple/[0.3] transition-all duration-300 hover:scale-105 aspect-square"
                  >
                    <div className="w-9 h-9 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="max-w-9 max-h-9 w-auto h-auto object-contain filter brightness-90"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${downloaded ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie 
                  key={animationKey}
                  options={defaultOptions} 
                  height={200} 
                  width={400} 
                />
              </div>

              <MagicButton
                title={downloaded ? "Resume Downloaded!" : "Download my resume"}
                icon={<FiDownload />}
                position="left"
                handleClick={handleDownload}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};