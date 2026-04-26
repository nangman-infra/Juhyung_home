import Link from "next/link";
import { ShieldCheck, Server, Activity, Terminal } from "lucide-react";
import { SITE_CONFIG } from "../../constants/ui";

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-[100] w-full border-b border-white/5 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <ShieldCheck className="text-emerald-500" size={24} />
          <span className="hidden sm:inline-block">{SITE_CONFIG.name}</span>
        </Link>
        
        <nav className="flex items-center gap-6 text-sm font-medium text-gray-400">
          <Link href="/about" className="hover:text-emerald-500 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-emerald-500 flex items-center gap-1 transition-colors">
            <Server size={14} /> Infra
          </Link>
          <Link href="/security-analysis" className="hover:text-emerald-500 flex items-center gap-1 transition-colors">
            <Activity size={14} /> Security
          </Link>
          <Link href="/blog" className="hover:text-emerald-500 transition-colors">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
