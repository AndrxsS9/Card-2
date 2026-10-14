import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Bestsellers from "@/components/Bestsellers";
import Promise from "@/components/Promise";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl overflow-hidden bg-paper md:my-6 md:rounded-[22px] md:shadow-xl">
      <Header />
      <Hero />
      <div className="-mt-[72px] px-4 md:px-[16px]">
        <div className="rounded-[28px] bg-paper px-5 pb-2 pt-7 shadow-[0_6px_24px_rgba(155,34,38,.12)] md:px-7">
          <MenuSection />
          <Bestsellers />
          <Promise />
        </div>
      </div>
      <Footer />
    </main>
  );
}
