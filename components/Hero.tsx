import ShimmerButton from "./ui/ShimmerButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { IoNavigate } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-30 -left-20 md:-left-30 md:-top-1 h-screen"
          fill="#d662c9"
        />
        <Spotlight
          className="md:top-10 md:left-full h-[80vh] md:w-[50vw]"
          fill="#A91079"
        />
        <Spotlight
          className="-top-20 left-60 md:top-5 md:left-80 h-[80vh] md:w-[50vw] "
          fill="#F806CC"
        />
      </div>
      <div className="h-screen w-full dark:bg-palette-1 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className=" flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4 md:gap-0">
          <TextGenerateEffect
            className="text-center text-[36px] md:text-5xl lg:text-6xl"
            words="Hi I'm Serhat, a Frontend Engineer based in Turkey."
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Dedicated self-learner, react enthusiast and passionate developer.
          </p>
          <a href="#about">
            <ShimmerButton
              text="Get to know me!"
              icon={<IoNavigate />}
              position="right"
              otherClasses="gap-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
