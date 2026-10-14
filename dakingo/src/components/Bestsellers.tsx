import Image from "next/image";
import { Heart, ChevronDown } from "lucide-react";
import { products } from "@/data/content";

export default function Bestsellers() {
  return (
    <section className="mt-8">
      <h2 className="text-base font-bold">Bestsellers from Across the Country</h2>
      <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {products.map((p) => (
          <li key={p.id} className="relative rounded-2xl bg-white p-3 shadow-[0_4px_14px_rgba(155,34,38,.1)]">
            <Heart size={11} className="absolute left-3 top-3 fill-brand" />
            <Image src={p.image} alt={p.name} width={70} height={70} className="mx-auto size-[70px] object-contain" />
            <h3 className="mt-2 min-h-[28px] text-[11px] font-semibold leading-[14px]">{p.name}</h3>
            <p className="mt-1 text-[11px] font-bold">₹{p.price} <span className="text-[8px] font-normal text-brand/60">(Reviews)</span></p>
            <p className="text-[9px] text-gold" aria-label="5 stars">★★★★★ <span className="text-brand/60">300</span></p>
            <button aria-label={`Add ${p.name}`} className="absolute bottom-3 right-3 grid size-4 place-items-center rounded-full bg-brand text-white"><ChevronDown size={10} /></button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-right"><a href="#" className="inline-block rounded-full bg-brand px-6 py-2 text-[11px] font-bold text-white">VIEW ALL</a></div>
    </section>
  );
}
