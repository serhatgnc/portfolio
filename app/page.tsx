import { navItems } from "data";
import Blogs from "@components/Blogs";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Grid from "@components/Grid";
import { FloatingNav } from "@components/ui/FloatingNavbar";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative bg-custom-1 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Suspense>
          <Blogs />
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}
