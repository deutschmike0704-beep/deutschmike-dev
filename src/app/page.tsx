import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Werdegang from "@/components/Werdegang";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <Werdegang />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
