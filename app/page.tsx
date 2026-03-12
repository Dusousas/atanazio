import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Main from "@/components/Main";
import Partners from "@/components/Partners";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Main />
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}>
        <About />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 900px" }}>
        <Services />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 980px" }}>
        <Projects />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 420px" }}>
        <Partners />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 820px" }}>
        <Faq />
      </div>
      <div style={{ contentVisibility: "auto", containIntrinsicSize: "1px 950px" }}>
        <Contact />
      </div>
    </>
  );
}
