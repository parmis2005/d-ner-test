import Header from "@/components/Header";
import Hero from "@/components/Hero";
import USPBar from "@/components/USPBar";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import OrderCTA from "@/components/OrderCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <USPBar />
        <About />
        <Menu />
        <Gallery />
        <Testimonials />
        <OrderCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
