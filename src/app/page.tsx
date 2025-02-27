import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Work from "@/app/components/Work";
import RotatingSpheres from "@/app/components/RotatingSpheres";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  const textures = [
    "/assets/html.png",
    "/assets/css.png",
    "/assets/nodejs.png",
    "/assets/reactjs.png",
    "/assets/redux.png",
    "/assets/docker.png",
    "/assets/mongodb.png",
    "/assets/tailwind.png",
    "/assets/figma.png",
  ];

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Work />
      <RotatingSpheres textures={textures} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}