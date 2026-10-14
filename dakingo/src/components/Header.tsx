import { Search, ShoppingCart, User } from "lucide-react";
import { navLinks } from "@/data/content";

export default function Header() {
  return (
    <header className="bg-blush">
      <div className="flex items-center justify-between px-5 pb-3 pt-4 md:px-10">
        <a href="#" className="text-[26px] font-extrabold leading-none text-brand">Dakingo</a>
        <div className="flex items-center gap-4">
          <form role="search" className="hidden h-8 w-[168px] overflow-hidden rounded-full border border-brand bg-white sm:flex">
            <input aria-label="Search" placeholder="Search" className="min-w-0 flex-1 bg-transparent px-3 text-[11px] outline-none placeholder:text-brand/40" />
            <button aria-label="Search" className="grid w-8 place-items-center bg-brand text-white"><Search size={13} /></button>
          </form>
          <ShoppingCart size={18} aria-label="Cart" />
          <a href="#" className="flex items-center gap-1 text-[10px] font-medium"><User size={14} className="sm:hidden" />Login/Signup</a>
        </div>
      </div>
      <nav aria-label="Main" className="flex items-center gap-6 overflow-x-auto border-t border-brand/10 px-5 py-3 text-[11px] font-medium md:px-10 [&::-webkit-scrollbar]:hidden">
        {navLinks.map((l, i) => <a key={i} href="#" className="shrink-0">{l}</a>)}
        <a href="#" className="ml-auto shrink-0 rounded-full bg-brand px-5 py-2 text-[11px] font-bold text-white">ORDER NOW</a>
      </nav>
    </header>
  );
}
