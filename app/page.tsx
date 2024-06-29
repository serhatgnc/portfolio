import { navItems } from "data";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import { FloatingNav } from "@components/ui/FloatingNavbar";
import dynamic from "next/dynamic";

const Grid = dynamic(() => import("@components/Grid"));
const Blogs = dynamic(() => import("@components/Blogs"));

export default function Home() {
  return (
    <main className="relative bg-custom-1 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Blogs />
        <Footer />
      </div>
    </main>
  );
}
