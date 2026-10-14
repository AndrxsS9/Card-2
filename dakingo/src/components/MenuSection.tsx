import { Cake, Cookie, Gift, IceCream, Sparkles, Candy } from "lucide-react";

const small = [Cake, Gift, Candy];
const cats = [{ l: "CLASSIC", I: Cake }, { l: "GOURMET", I: Sparkles }, { l: "DESSERTS", I: IceCream }, { l: "COOKIES", I: Cookie }];

export default function MenuSection() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-[26px] font-extrabold leading-none">Menu</h2>
        <p className="mt-1 text-[11px] font-medium">What will you wish for?</p>
        <div className="mt-3 flex gap-2">
          {small.map((I, i) => <span key={i} className="grid size-8 place-items-center rounded-full bg-blush"><I size={14} /></span>)}
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-3 md:gap-4">
        {cats.map(({ l, I }) => (
          <li key={l} className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-white shadow-[0_4px_14px_rgba(155,34,38,.12)] md:size-[78px]">
            <I size={26} strokeWidth={1.6} />
            <span className="text-[8px] font-bold">{l}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
