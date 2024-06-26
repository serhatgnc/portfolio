"use client";
import { cn } from "utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import { useState } from "react";
import animationData from "data/confetti.json";
import Lottie from "react-lottie";
import ShimmerButton from "./ShimmerButton";
import { IoCopy } from "react-icons/io5";
import { Meteors } from "./Meteors";
import { techStackLeft, techStackRight } from "data";
import { BackgroundBeams } from "./BeamsBackground";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 lg:gap-8 gap-4 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export type BentoGridItemProps = {
  className?: string;
  title?: string;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: BentoGridItemProps) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const email = "genc.serhat97@gmail.com";
    navigator.clipboard.writeText(email);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        className ?? "",
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.05] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 bg-custom-2"
      )}
    >
      <div className={`${id === 6 ? "flex justify-center" : ""} h-full`}>
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
          className={`absolute right-0 -bottom-5 ${
            id === 5 ? "w-full opacity-80" : ""
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 ? (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        ) : null}

        <div
          className={cn(
            titleClassName ?? "",
            `group-hover/bento:translate-x-2 transition duration-200 relative md:h-full ${
              id === 2 ? "min-h-72" : "min-h-40"
            } flex flex-col px-5 p-5 lg:p-10`
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div className="font-sans text-lg lg:text-xl xl:text-3xl max-w-96 font-bold z-10">
            {title}
          </div>
          {id === 2 ? <GridGlobe /> : null}
          {id === 5 ? <Meteors number={20} /> : null}
          {id === 1 ? <BackgroundBeams /> : null}
          {id === 3 ? (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {techStackLeft.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-[0.5rem]  lg:text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-1 lg:px-3 py-2 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-1 lg:px-3 py-2 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {techStackRight.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-[0.5rem] lg:text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {id === 6 ? (
            <div className="relative">
              <div className="-z-20 absolute -right-36 -bottom-16 md:-bottom-9 md:-right-20 block">
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <ShimmerButton
                text={copied ? "Email is Copied!" : "Copy"}
                icon={<IoCopy />}
                position="right"
                onClick={handleCopy}
                otherClasses="md:w-auto lg:w-full text-xs sm:text-sm md:text-base mt-2 md:mt-4 gap-1"
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
