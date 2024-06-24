import { MdTouchApp } from "react-icons/md";
import ShimmerButton from "./ui/ShimmerButton";
import { socials } from "data";
import { createElement } from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <a href="mailto:genc.serhat97@gmail.com">
          <ShimmerButton
            text="Let's get in touch"
            icon={<MdTouchApp />}
            position="right"
            otherClasses="gap-1"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          2024 Serhat Genç
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socials.map(({ id, icon, text, to }) => (
            <Link
              href={to}
              target="_blank"
              key={id}
              className="p-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#d90368] rounded-lg gap-1"
            >
              {text ? <p className="text-xs">{text}</p> : null}
              {createElement(icon)}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
