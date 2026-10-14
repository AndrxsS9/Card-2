import Image from "next/image";
import { Cake, ChefHat, ShoppingBag, Truck } from "lucide-react";
import { gallery } from "@/data/content";

const stats = [{ I: Truck, l: "ON-TIME DELIVERY" }, { I: Cake, l: "5100+ DESIGNS" }, { I: ShoppingBag, l: "2 CR+ ORDERS" }, { I: ChefHat, l: "BAKED FRESH" }];
const card = "rounded-2xl bg-blush p-4";

export default function Promise() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-extrabold leading-none">Our Promise</h2>
      <p className="mt-1 text-[11px] font-medium">There&apos;s no secret spell — only honest work!</p>
      <div className="mt-5 grid gap-4 md:grid-cols-[0.92fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className={card}>
            <p className="text-[11px] font-bold">A glimpse of our world!</p>
            <ul className="mt-3 grid grid-cols-4 gap-1 text-center">
              {stats.map(({ I, l }) => (
                <li key={l} className="flex flex-col items-center gap-1.5">
                  <span className="grid size-10 place-items-center rounded-full border-2 border-brand bg-white"><I size={18} /></span>
                  <span className="text-[7px] font-bold leading-tight">{l}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`${card} flex items-center gap-4`}>
            <Image src="/images/ticket.png" alt="" width={80} height={95} className="h-[95px] w-20 object-contain" />
            <div>
              <h3 className="text-[15px] font-extrabold">THE MAGICAL TICKET</h3>
              <p className="mt-1 text-[10px] leading-[14px]">Add 3 reminders in your account.<br />Win offers worth Rs. 750</p>
              <a href="#" className="mt-3 inline-block rounded-full bg-brand px-5 py-1.5 text-[10px] font-bold text-white">UNLOCK NOW</a>
            </div>
          </div>
          <div className={`${card} flex items-center gap-4 py-3`}>
            <div className="flex -space-x-1">
              {[1, 2, 3, 4, 5].map((n) => <Image key={n} src={`/images/avatar-${n}.png`} alt="" width={24} height={24} className="size-6 rounded-full border border-white object-cover" />)}
            </div>
            <a href="#" className="text-[11px] font-semibold">Follow us on social!</a>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {gallery.map((src, i) => (
            <li key={src} className="relative aspect-[1.3] overflow-hidden rounded-2xl">
              <Image src={src} alt={`Dakingo celebration ${i + 1}`} fill sizes="(min-width:768px) 150px, 45vw" className="object-cover" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
