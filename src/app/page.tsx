import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import USPBar from "@/components/USPBar";
import Showcase from "@/components/Showcase";
import Story from "@/components/Story";
import Founder from "@/components/Founder";
import Categories from "@/components/Categories";
import Menu from "@/components/Menu";
import VideoReels from "@/components/VideoReels";
import FreshBanner from "@/components/FreshBanner";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import LoyaltyBanner from "@/components/LoyaltyBanner";
import News from "@/components/News";
import Franchise from "@/components/Franchise";
import OrderCTA from "@/components/OrderCTA";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <USPBar />
        <Showcase />
        <Story />
        <Founder />
        <Categories />
        <Menu />
        <VideoReels />
        <FreshBanner />
        <Gallery />
        <Testimonials />
        <LoyaltyBanner />
        <News />
        <Franchise />
        <OrderCTA />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
