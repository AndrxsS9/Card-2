import { ArrowDown } from "lucide-react";
import { footerColumns } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mt-8 px-5 pb-8 md:px-10">
      <p className="rounded-2xl bg-brand px-4 py-5 text-center text-[15px] font-semibold text-white md:text-[17px]">
        Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
      </p>
      <div className="mt-7 grid gap-6 md:grid-cols-[1fr_3fr]">
        <div>
          <p className="text-2xl font-extrabold leading-none">Dakingo</p>
          <ul className="mt-2 space-y-0.5 text-[8px]"><li>Our Story</li><li>Contact Us</li><li>Locate Us</li></ul>
        </div>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {footerColumns.map((c, i) => (
            <div key={i}>
              <h4 className="text-[8px] font-bold">{c.title}</h4>
              <ul className="mt-1 space-y-1 text-[8px]">{c.links.map((l) => <li key={l}>{l}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3 md:justify-end">
        <form className="flex w-full items-center gap-3 md:w-auto">
          <input type="email" aria-label="Email" placeholder="Enter Email Address" className="h-8 min-w-0 flex-1 rounded-full border border-brand/70 bg-white px-4 text-[10px] outline-none md:w-[177px] md:flex-none" />
          <button className="h-8 rounded-full bg-brand px-5 text-[10px] font-bold text-white">SUBSCRIBE</button>
        </form>
        <span className="flex items-center gap-2 text-[8px]"><ArrowDown size={20} className="rounded-full border-2 border-brand p-0.5" />Hey, need any help?</span>
      </div>
    </footer>
  );
}
