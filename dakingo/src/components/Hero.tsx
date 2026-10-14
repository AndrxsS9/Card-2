import Image from "next/image";

const ring = "overflow-hidden rounded-full border-[5px] border-white shadow-lg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#e9737d] via-[#b5373d] to-[#9b2226] px-5 pb-24 pt-6 md:px-10 md:pb-[100px] md:pt-4">
      <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
        <div className={`${ring} size-[200px] shrink-0 border-[6px]`}>
          <Image src="/images/hero-main.png" alt="Chocolate cake with berries" width={200} height={200} priority className="size-full object-cover" />
        </div>
        <div className="flex-1 text-center text-white md:text-left">
          <h1 className="text-[32px] font-extrabold leading-[1.05] tracking-wide">DECADENT<br />CHOCOLATE<br />BLISS!</h1>
          <p className="mt-1 text-lg font-light">Satisfy Your Sweet Cravings</p>
          <div className="mt-3 inline-block rounded-full bg-brand-dark px-5 py-1 text-left shadow-md">
            <span className="block text-[8px] leading-none">Special Offer!</span>
            <b className="text-xl leading-tight">SAVE 20%</b>
          </div>
        </div>
        <div className="flex gap-3 md:flex-col md:gap-4">
          <div className={`${ring} size-[90px]`}><Image src="/images/hero-lava.png" alt="Lava cake" width={90} height={90} className="size-full object-cover" /></div>
          <div className={`${ring} size-[90px]`}><Image src="/images/hero-cake.png" alt="Chocolate slice" width={90} height={90} className="size-full object-cover" /></div>
        </div>
      </div>
    </section>
  );
}
