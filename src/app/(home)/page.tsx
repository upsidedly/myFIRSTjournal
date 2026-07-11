"use client"
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BracketsCurlyIcon, CpuIcon, GearSixIcon, GraduationCapIcon, RocketIcon, RocketLaunchIcon, UsersThreeIcon, WarningCircleIcon, CircuitryIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
  <section>
  <main className="relative flex min-h-screen w-full flex-col justify-center gap-10 overflow-hidden bg-background px-4 py-10 text-foreground sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8 md:px-10 lg:px-12 xl:px-16 2xl:px-24 dark:bg-[#0F090B] dark:text-white">
    <div className="pointer-events-none absolute left-10 top-24 z-0 hidden max-w-xs rounded-2xl border border-border/60 bg-card/90 p-4 font-mono text-[11px] leading-relaxed text-foreground/70 shadow-2xl backdrop-blur-md xl:block dark:border-white/10 dark:bg-black/40 dark:text-[#ffb3ad] animate-drift-slow">
      <pre>{`void autonomous_mode() {
  navigation.target(120, 45);
  while (!at_position()) {
    pid.update();
    drive.power(pid.output());
  }
}`}</pre>
    </div>
    <div className="pointer-events-none absolute right-12 top-40 z-0 hidden max-w-xs rounded-2xl border border-border/60 bg-card/90 p-4 font-mono text-[11px] leading-relaxed text-foreground/70 shadow-2xl backdrop-blur-md xl:block dark:border-white/10 dark:bg-black/40 dark:text-[#e5bdb9] animate-drift-gentle [animation-delay:-3s]">
      <pre>{`@Autonomous(name="PowerShot")
public class AutoShoot extends LinearOpMode {
  shooter.setVelocity(2400);
}`}</pre>
    </div>
    <div className="pointer-events-none absolute bottom-24 left-[18%] z-0 hidden rounded-full border border-[#E43437]/20 bg-card/95 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70 shadow-xl backdrop-blur-md lg:block dark:bg-black/45 dark:text-[#ffb3ad] animate-drift-gentle [animation-delay:-5s]">
      // code_stable
    </div>
    <div className="pointer-events-none absolute bottom-36 right-[20%] z-0 hidden rounded-full border border-[#E43437]/20 bg-card/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground shadow-xl backdrop-blur-md lg:block dark:bg-white/80 dark:text-black animate-drift-slow [animation-delay:-4s]">
      FTC 16075
    </div>
    <div className="pointer-events-none absolute left-20 top-[18%] z-0 h-28 w-28 rounded-full bg-[#E43437]/10 blur-3xl animate-drift-gentle" />
    <div className="pointer-events-none absolute bottom-[14%] right-[12%] z-0 h-36 w-36 rounded-full bg-[#E43437]/8 blur-[90px] animate-drift-slow [animation-delay:-6s]" />
    <div className="flex flex-[1.12] flex-col items-center justify-center text-center md:items-start md:text-left lg:pl-6 xl:pl-10">
      <div className="flex w-full flex-col items-start gap-6 md:max-w-2xl lg:gap-7 xl:gap-8">
        <div className="flex items-center justify-center gap-4 rounded-lg bg-[#E43437] p-2 text-white shadow-sm -rotate-3">
          <RocketLaunchIcon className="w-5 h-5 " />
          <h1 style={{ wordSpacing: '0.5em' }} className="text-sm uppercase font-bold">First Tech Challenge Exculsive</h1>
        </div>
        <h1 className="text-4xl uppercase leading-none text-foreground sm:text-5xl md:text-7xl xl:text-8xl dark:text-white">
          <span>Croco</span>
          <span className="text-[#E43437] italic">Docs</span>
        </h1>
        <p className="text-left text-base text-foreground sm:text-lg md:text-3xl dark:text-white">
          Your <span className="bg-[#E43437]/30 border-b-[1px] border-b-[#E43437]  text-[#E43437] font-bold px-2 py-0.5 rounded-none inline-block -skew-x-2">powerful</span> guide to building championship winning <span className="font-bold">FIRST</span> robots! 🚀
        </p>
        <blockquote className="max-w-xl border-l-4 border-border pl-4 text-left text-muted-foreground text-lg leading-relaxed dark:border-[#2f2a2a] dark:text-[#e5bdb9]/70">
          <p>
            We bridge the gap between dense technical manuals and the high-speed chaos of the competition floor. Built by students, tested on the field.
          </p>
        </blockquote>
        <div className="flex flex-row gap-3 pt-2l">
          <Button asChild size="lg" className="rounded-lg bg-[#ff4b44] px-8 text-base font-bold text-white shadow-[0_10px_0_0_rgba(120,20,18,0.85)] transition-transform hover:-translate-y-0.5 hover:bg-[#ff5a54]">
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-lg border-border bg-background px-8 text-base font-bold text-foreground hover:bg-muted dark:border-[#222] dark:bg-transparent dark:text-white dark:hover:bg-white/5 dark:hover:text-white">
            <Link href="https://github.com/FIRST-Tech-Challenge/FtcRobotController" target="_blank" rel="noreferrer">
              View GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
    <div className="relative z-10 flex min-h-[30rem] flex-[0.88] items-center justify-center overflow-visible py-6 sm:min-h-[34rem] md:min-h-[42rem] md:py-0 md:pr-2 lg:min-h-[48rem] lg:pr-6 xl:min-h-[52rem] xl:pr-10">
      <div className="pointer-events-none absolute right-6 top-6 opacity-20">
        <GearSixIcon className="h-24 w-24 rotate-12 text-[#E43437]" />
      </div>
      <div className="pointer-events-none absolute bottom-10 left-4 opacity-20">
        <BracketsCurlyIcon className="h-16 w-16 -rotate-45 text-[#E43437]" />
      </div>

      <div className="relative w-full max-w-md animate-card-float lg:max-w-xl xl:max-w-2xl">
        <div className="absolute inset-0 rounded-3xl bg-[#E43437]/10 -translate-x-4 translate-y-4 rotate-[-6deg] dark:bg-[#E43437]/10" />
        <div className="absolute inset-0 rounded-3xl bg-[#E43437]/20 -translate-x-2 -translate-y-2 rotate-[3deg] dark:bg-[#E43437]/20" />

        <div className="relative grid min-h-[24rem] place-items-center overflow-visible rounded-3xl border border-border bg-card p-5 text-card-foreground shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:min-h-[28rem] sm:p-7 lg:min-h-[34rem] lg:p-8 xl:min-h-[36rem] xl:p-9 dark:border-black/5 dark:bg-white dark:text-black">
          <div className="absolute right-4 top-4 rounded-md border border-black/10 bg-[#ffd24d] px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-sm rotate-12 dark:border-black/10">
            2026 season
          </div>


          <div className="relative z-10 mx-auto flex h-44 w-44 items-center justify-center rounded-xl px-6 sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80 xl:h-[25rem] xl:w-[25rem]">
                     <Image src="/crocodocs.svg" alt="CrocoDocs" width={600} height={600} className="relative z-10 mx-auto h-full w-full object-contain" />

          </div>
          <div className="absolute bottom-6 left-6 rounded bg-black px-3 py-1 text-[10px] font-black tracking-[0.3em] text-white dark:bg-black dark:text-white">
            TEAM 16075
          </div>
        </div>

        <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-foreground shadow-lg backdrop-blur-md rotate-[-3deg] sm:px-6 dark:border-black/10 dark:bg-white/90 dark:text-[#5a5151]">
          <RocketIcon className="h-4 w-4 text-[#E43437]" />
          FIRST TECH CHALLENGE EXCLUSIVE
        </div>

        <div className="absolute left-[-3rem] top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-card px-4 py-2 font-mono text-[10px] font-semibold tracking-[0.18em] text-foreground shadow-xl md:block rotate-[-6deg] dark:border-white/20 dark:bg-black dark:text-white">
          // CODE_STABLE
        </div>

        <div className="absolute left-6 top-6 hidden items-center gap-2 rounded-full border border-border bg-card/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-md md:flex dark:border-black/5 dark:bg-white/90 dark:text-[#5a5151]">
          <CpuIcon className="h-4 w-4 text-[#E43437]" />
          build field-ready robots
        </div>
      </div>
    </div>
    <div className="wave-bottom pointer-events-none z-20 text-[#FBF1F0] dark:text-[#131313]">
      <svg data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
        <path className="shape-fill" d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
      </svg>
    </div>
  </main>

  <section className="relative bg-[#FBF1F0] py-16 text-foreground md:py-20 dark:bg-[#131313] dark:text-white">
    <div className="mx-auto w-full px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
      <div className="mb-10 flex flex-col gap-4 md:mb-12">
        <div className="flex items-center gap-4">
          <div className="h-px w-12 bg-primary"></div>
          <span className="text-primary font-code-snippet text-sm uppercase tracking-[0.4em]">CORE PRINCIPLES</span>
        </div>
        <h2 className="max-w-4xl font-headline-lg text-4xl uppercase leading-none tracking-tighter text-foreground md:text-6xl dark:text-on-background">
          ENGINEERED FOR <br />
          <span className="text-primary italic">MAXIMUM</span> PERFORMANCE.
        </h2>
        <div className="h-1.5 w-28 bg-primary"></div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="group relative min-h-[26rem] overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-2xl transition-all duration-500 hover:border-primary/30 md:col-span-8 md:min-h-[28rem] lg:p-10 lg:min-h-[30rem] dark:border-outline-variant/20 dark:bg-[#1C1B1B]">
          <div className="absolute -right-14 -top-14 p-8 opacity-[0.05] transition-opacity group-hover:opacity-[0.1]">
            <GraduationCapIcon className="h-48 w-48 text-[#ffb3ad] lg:h-56 lg:w-56" />
          </div>
          <div className="relative z-10">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:scale-110 lg:mb-8 lg:h-14 lg:w-14">
              <GraduationCapIcon className="h-6 w-6 text-primary lg:h-7 lg:w-7" />
            </div>
            <h3 className="mb-4 text-3xl uppercase tracking-tight text-foreground font-headline-md lg:mb-6 dark:text-on-background">
              Accessible Learning
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg dark:text-on-surface-variant">
              Complex robotics concepts broken down into digestible, modular components. Designed specifically for rookie programmers and veteran leads alike.
            </p>
            <div className="mt-8 lg:mt-12">
              <Link href="#" className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-primary transition-all group-hover:gap-5">
                Read Documentation
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:col-span-4 md:gap-8">
          <div className="group min-h-[12.5rem] rounded-3xl border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 lg:min-h-[14rem] lg:p-8 dark:border-outline-variant/20 dark:bg-[#1C1B1B]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:rotate-12 lg:h-12 lg:w-12">
              <UsersThreeIcon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-on-background lg:mb-3">
              Student-Created
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground dark:text-on-surface-variant">
              Documentation written by those in the pits. Authentic, tested, and battle-hardened.
            </p>
          </div>

          <div className="group min-h-[12.5rem] rounded-3xl border border-border bg-card p-6 shadow-xl transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 lg:min-h-[14rem] lg:p-8 dark:border-outline-variant/20 dark:bg-[#1C1B1B]">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:rotate-12 lg:h-12 lg:w-12">
              <WarningCircleIcon className="h-5 w-5 text-primary lg:h-6 lg:w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold uppercase tracking-tight text-on-background lg:mb-3">
              Edge Cases
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground dark:text-on-surface-variant">
              Beyond the API. We cover the weird motor glitches and sensor noise issues you actually face.
            </p>
          </div>
        </div>

        <div className="flex min-h-[20rem] flex-col items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-2xl transition-all hover:border-primary/20 md:col-span-12 lg:min-h-[22rem] lg:flex-row lg:gap-12 lg:p-10 dark:border-outline-variant/20 dark:bg-[#1C1B1B]">
          <div className="flex-1">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 lg:mb-6 lg:h-14 lg:w-14">
              <CircuitryIcon className="h-6 w-6 text-primary lg:h-7 lg:w-7" />
            </div>
            <h3 className="mb-3 text-3xl uppercase tracking-tight text-foreground font-headline-md lg:mb-4 dark:text-on-background">
              Central Control Hub
            </h3>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground lg:text-lg dark:text-on-surface-variant">
              One single source of truth for your team's code standards, logic flows, and hardware integration maps. Built to sustain team knowledge across seasons.
            </p>
          </div>

          <div className="group min-h-[13rem] w-full rounded-3xl border border-border p-6 font-mono shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-primary/40 lg:min-h-[15rem] lg:w-[400px] lg:p-8 dark:border-outline-variant/40 bg-[#0F090B]">
            <div className="mb-4 flex gap-2.5 lg:mb-6">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
            </div>
            <pre className="font-code-snippet text-xs leading-relaxed text-primary/90 transition-colors group-hover:text-primary lg:text-sm dark:text-primary/90">{`{
 "system": "ACTIVE",
  "optimization": 0.98,
  "telemetry": "CONNECTED",
  "team": "16075",
  "status": "CHAMPIONSHIP_READY",
  "logs": [
    "PID_TUNE: STABLE",
    "CV_SCAN: DETECTED"
  ]
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  </section>
 <Footer/>
  
  </section>
  );
}
