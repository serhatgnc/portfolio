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
      "Known for collaborative spirit, problem-solving skills, and dedication to cutting-edge solutions.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "./b1.webp",
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
    img: "/codesnippet.webp",
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
    ariaLabel: "resume",
  },
  {
    id: 2,
    icon: IoLogoGithub,
    to: "https://github.com/serhatgnc",
    ariaLabel: "github profile",
  },
  {
    id: 3,
    icon: IoLogoLinkedin,
    to: "https://www.linkedin.com/in/serhat-genc/",
    ariaLabel: "linkedin profile",
  },
];

export const techStackLeft = ["Jest", "Next.js", "React", "Typescript"];

export const techStackRight = [
  "Testing Library",
  "React Native",
  "Javascript",
  "NoSQL",
];
