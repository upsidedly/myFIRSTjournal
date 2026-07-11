import { Wordmark } from "./wordmark";
import Image from "next/image";

const Footer = () => {
  return (
     <footer className="relative w-full overflow-hidden border-t border-outline-variant/10 bg-surface-container-lowest px-6 py-16 sm:px-8 sm:py-20 lg:px-margin-desktop lg:py-24">
        <div className="pointer-events-none absolute bottom-0 right-0 h-full w-full bg-primary/[0.03] blur-[120px] sm:w-1/2"></div>
        <div className="relative z-10 mx-auto flex max-w-[1400px] flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16 lg:gap-20">
        <div className="flex max-w-sm flex-col gap-6 sm:gap-8">
        <div className="flex items-center gap-3 sm:gap-4">
        <Image src="/crocodocs.svg" alt="CrocoDocs" width={50} height={50} className="h-[1.8em] w-auto shrink-0" />
        <span className="text-2xl tracking-tighter text-on-background font-headline-md sm:text-3xl">CROCO<span className="text-primary italic">DOCS</span></span>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-base font-body-md">
                            Documentation for the next generation of FIRST robotics champions. Lead the pack.
                        </p>
        <p className="font-code-snippet text-[10px] uppercase tracking-[0.2em] text-on-surface/40">
                            &copy; 2026  Crimson Crocs 16075. BREAK SOME FURNITURE
                        </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-14 lg:gap-20"> 
        <div className="flex flex-col gap-5 sm:gap-6">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-on-background">RESOURCES</span>
        <a className="text-sm font-bold uppercase text-on-surface-variant transition-all hover:text-primary" href="#">GitHub Repo</a>
        <a className="text-sm font-bold uppercase text-on-surface-variant transition-all hover:text-primary" href="#">Documentation</a>
        <a className="text-sm font-bold uppercase text-on-surface-variant transition-all hover:text-primary" href="#">API Reference</a>
        </div>
        <div className="flex flex-col gap-5 sm:gap-6">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-on-background">THE TEAM</span>
        <a className="text-sm font-bold uppercase text-on-surface-variant transition-all hover:text-primary" href="#">About Us</a>
        <a className="text-sm font-bold uppercase text-on-surface-variant transition-all hover:text-primary" href="#">Contact</a>
        <a className="text-sm font-bold uppercase text-on-surface-variant transition-all hover:text-primary" href="#">Sponsorship</a>
        </div>
        </div>
        </div>
        </footer>
  );
};

export default Footer;
