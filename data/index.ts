import { BentoGridItemProps } from "components/ui/BentoGrid";
import { IoCloudDownload, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Blogs", link: "#blogs" },
];

export const gridItems: Array<BentoGridItemProps> = [
  {
    id: 1,
    title:
      "Leveraging the power of modern frameworks like React, Next.js, and TypeScript to create user-centric, performant, and scalable web applications.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "Capable of adapting to flexible working hours and managing time zone differences effectively.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Dedicated self-learner, react enthusiast and passionate developer.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start max-w-full",
    img: "",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Committed to clean, modular, and efficient code.",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute -right-5 -bottom-5 md:w-3/4 w-72",
    titleClassName:
      "justify-center justify-start sm:justify-center sm:max-w-60 lg:justify-center max-w-full lg:max-w-64 xl:max-w-96",
    img: "/codesnippet.png",
    spareImg: "",
  },
  {
    id: 6,
    title: "Grab My Email",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const socials = [
  {
    id: 1,
    text: "Resume",
    icon: IoCloudDownload,
    to: "./resume.pdf",
  },
  {
    id: 2,
    icon: IoLogoGithub,
    to: "https://github.com/serhatgnc",
  },
  {
    id: 3,
    icon: IoLogoLinkedin,
    to: "https://www.linkedin.com/in/serhat-genc/",
  },
];
