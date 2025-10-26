import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Main />
      <About />
      <Services />
      <Projects />
      <Faq />
      <Contact />
    </>
  );
}
