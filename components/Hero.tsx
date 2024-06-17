import ShimmerButton from "./ui/ShimmerButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { IoNavigate } from "react-icons/io5";

const Hero = async () => {
  const response = await fetch(
    "https://api.quotable.io/quotes/random?tags=motivational",
    { cache: "no-store" }
  );
  const quotes = (await response.json()) as Array<{ content: string }>;

  console.log(quotes);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-24 -left-20 md:-left-36 md:-top-20 h-screen"
          fill="#e27396"
        />
        <Spotlight
          className="md:top-10 md:left-full h-[80vh] md:w-[50vw]"
          fill="#ae2a9a"
        />
        <Spotlight
          className="-top-20 left-60 md:top-5 md:left-80 h-[80vh] md:w-[50vw] "
          fill="#d90368"
        />
      </div>
      <div className="h-screen w-full dark:bg-custom-1 bg-white dark:bg-dot-white/[0.15] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-custom-1 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className=" flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-4 md:gap-0">
          <p className="lg:text-base md:text-sm text-xs">{quotes[0].content}</p>
          <TextGenerateEffect
            className="text-center text-[36px] md:text-5xl lg:text-6xl"
            words="Crafting Digital Experiences with Passion and Precision"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Serhat, a Frontend Engineer based in Turkey.
          </p>
          <a href="#about">
            <ShimmerButton
              text="Get to know me"
              icon={<IoNavigate />}
              position="right"
              otherClasses="gap-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
