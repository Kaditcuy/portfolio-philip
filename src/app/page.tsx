import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Work from "@/app/components/Work";
import RotatingSpheres from "@/app/components/RotatingSpheres";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  const techLogos = [
    { name: "Html", icon: "/assets/html.png"},
    { name: "CSS", icon: "/assets/css.png"},
    { name: "Node.js", icon: "/assets/nodejs.png"},
    { name: "React.js", icon: "/assets/reactjs.png"},
    { name: "Redux", icon: "/assets/redux.png"},
    { name: "Docker", icon: "/assets/docker.png"},
    { name: "MongoDb", icon: "/assets/mongodb.png"},
    { name: "Tailwind", icon: "/assets/tailwind.png"},
    { name: "Figma", icon: "/assets/figma.png"},
    { name: "Php", icon: "/assets/php.png"},
    { name: "Nextjs", icon: "/assets/nextjs.png"},
    { name: "Python", icon: "/assets/python.png"},
    { name: "JavaScript", icon: "/assets/JavaScript.png"},
    { name: "Git", icon: "/assets/git.png"},
  ];

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Work />
      <RotatingSpheres techLogos={techLogos} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}