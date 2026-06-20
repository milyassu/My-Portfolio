import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Technologies from "@/components/Technologies";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <Technologies />
      <About />
      <Education />
      <TechStack />
      <Skills />
      <Experience />
      <Projects />
      <Research />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
