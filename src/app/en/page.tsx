import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  WifiOff,
  Settings,
  MonitorPlay,
  Layers,
  CheckCircle2,
  Zap,
  BookOpen,
  Trophy,
  Wallet,
  Headphones,
  KeyRound,
  PlayCircle,
  Sparkles,
  Film,
  Cpu,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { MovieShowcase, MovieShowcaseSkeleton } from "@/components/sections/MovieShowcase";
import { Reviews } from "@/components/sections/Reviews";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { PricingCard } from "@/components/cards/PricingCard";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { PaymentMethods } from "@/components/ui/PaymentMethods";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPlans } from "@/lib/pricing";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "IPTV in Germany – Premium 4K Streaming",
  description:
    "StreamGermany4K is your premium IPTV service for Germany: Live TV, sports, and movies in 4K/HD on Smart TVs, Fire TV Stick, mobile, and more. Compare plans and start streaming effortlessly.",
  path: "/en",
  locale: "en",
});

const sports = [
  { emoji: "⚽", name: "Football" },
  { emoji: "🏎️", name: "Formula 1" },
  { emoji: "🎾", name: "Tennis" },
  { emoji: "🥊", name: "Boxing & MMA" },
  { emoji: "🏈", name: "US Sports" },
  { emoji: "🏒", name: "Ice Hockey" },
];

const entertainment = [
  {
    img: "/images/iptv-live-tv-wohnzimmer.jpg",
    alt: "Live TV on smart television in living room",
    title: "Live TV",
    text: "German and international channels streamed live over the internet.",
    href: "/en/iptv-comparison",
  },
  {
    img: "/images/iptv-sport-streaming.jpg",
    alt: "Streaming live sports over IPTV",
    title: "Sports",
    text: "Football, Formula 1, tennis, and more – depending on package.",
    href: "/en/iptv-sports",
  },
  {
    img: "/images/iptv-heimkino.jpg",
    alt: "Home cinema movie streaming setup",
    title: "Movies",
    text: "A vast selection of on-demand movies and blockbusters.",
    href: "/en/iptv-comparison",
  },
  {
    img: "/images/iptv-entertainment-dashboard.jpg",
    alt: "Series and documentaries on demand",
    title: "Series",
    text: "Binge popular series and documentaries anytime on demand.",
    href: "/en/iptv-comparison",
  },
  {
    img: "/images/iptv-4k-qualitaet.jpg",
    alt: "Ultra HD 4K streaming quality",
    title: "4K Entertainment",
    text: "Crystal-clear picture quality up to 4K, content dependent.",
    href: "/en/features",
  },
  {
    img: "/images/iptv-multi-geraete.jpg",
    alt: "Multi-device IPTV streaming support",
    title: "Multi-Device",
    text: "Usable on Smart TV, streaming stick, smartphone, and computer.",
    href: "/en/devices",
  },
];

const problems = [
  { icon: WifiOff, title: "Constant Buffering", text: "Stuttering and interruptions right in the middle of games or movies." },
  { icon: Settings, title: "Complicated Setup", text: "Unclear instructions and technical frustration during setup." },
  { icon: MonitorPlay, title: "Incompatible Devices", text: "Apps that fail to install or run properly on your hardware." },
  { icon: Layers, title: "Cluttered Apps", text: "Chaotic channel lists without a structured EPG TV guide." },
];

const solutions = [
  "Stability-optimized servers and clear guidance to eliminate buffering",
  "Straightforward, device-specific walkthroughs for rapid setup",
  "Broad compatibility with popular and verified IPTV player apps",
  "Accessible troubleshooting guides and friendly, responsive support",
];

const benefits = [
  { icon: Zap, title: "Quick Setup", description: "Ready to stream in minutes without needing technical expertise." },
  { icon: MonitorPlay, title: "Multi-Device", description: "Smart TV, Fire TV Stick, Apple TV, Android, iOS, Windows, and Mac." },
  { icon: BookOpen, title: "Clear Walkthroughs", description: "Step-by-step setup guides for every supported hardware platform." },
  { icon: Trophy, title: "Sports & Entertainment", description: "Live TV, international sports leagues, and an extensive VOD library." },
  { icon: Wallet, title: "Flexible Plans", description: "From 3 months to 1 year – choose the duration that matches your habits." },
  { icon: Headphones, title: "Dedicated Support", description: "Personal assistance with setup and questions whenever needed." },
];

const featuredDevices = [
  {
    img: "/images/iptv-samsung-tv-setup.jpg",
    alt: "IPTV setup on Samsung Smart TV",
    title: "Samsung Smart TV",
    text: "Directly through the Smart Hub (Tizen) without extra hardware.",
    href: "/en/iptv-samsung",
  },
  {
    img: "/images/iptv-lg-smart-tv.jpg",
    alt: "IPTV setup on LG Smart TV",
    title: "LG Smart TV",
    text: "Via webOS and the official LG Content Store.",
    href: "/en/iptv-lg-smart-tv",
  },
];

const deviceTiles = [
  { img: "/images/firestick.png", label: "Fire TV Stick", href: "/en/iptv-fire-tv-stick" },
  { img: "/images/appletv.png", label: "Apple TV", href: "/en/iptv-apple-tv" },
  { img: "/images/androidtvbox.png", label: "Android TV", href: "/en/iptv-android-tv" },
  { img: "/images/iphone17.png", label: "iPhone & iPad", href: "/en/devices" },
  { img: "/images/chromecast.png", label: "Chromecast", href: "/en/devices" },
  { img: "/images/nvidiashield.png", label: "NVIDIA Shield", href: "/en/devices" },
];

const apps = [
  { name: "IPTV Smarters Pro", href: "/en/iptv-smarters-pro", text: "Popular multi-platform player with Xtream and M3U playlist support." },
  { name: "TiviMate", href: "/en/iptv-tivimate", text: "Top-rated player for Fire TV and Android TV with an advanced EPG interface." },
  { name: "Smart TV Apps", href: "/en/iptv-apps", text: "Native IPTV applications available directly from your TV's app store." },
];

const steps = [
  { n: "01", icon: Wallet, title: "Select Your Plan", text: "Choose the subscription period that fits your viewing habits – from 3 months to 1 year." },
  { n: "02", icon: KeyRound, title: "Access & Setup", text: "Receive your access credentials and easily configure your favorite app." },
  { n: "03", icon: PlayCircle, title: "Start Streaming", text: "Enter your login details and enjoy live TV, sports, and movies in 4K/HD." },
];

const proofShots = [
  { img: "/images/iptv-installation-anleitung.jpg", alt: "Step-by-step guided IPTV setup", label: "Guided Setup" },
  { img: "/images/iptv-samsung-app-store.jpg", alt: "IPTV app in Smart TV app store", label: "Store Apps" },
  { img: "/images/iptv-google-tv-dashboard.jpg", alt: "Google TV IPTV program guide", label: "Program Guide" },
  { img: "/images/iptv-android-tv-setup.jpg", alt: "Android TV IPTV configuration", label: "Android TV Setup" },
  { img: "/images/iptv-multi-geraete.jpg", alt: "Multi-device IPTV streaming", label: "Multiple Devices" },
  { img: "/images/beste-iptv-apps-dashboard.jpg", alt: "Neat IPTV app with channel overview", label: "Clear App UI" },
];

const transparency = [
  "Clear subscription plans and transparent pricing",
  "Understandable, device-specific setup guidance",
  "Authentic interface and setup screenshots",
  "Direct support available for any questions",
  "Detailed guides for devices and compatible apps",
  "No fabricated reviews or artificial statistics",
];

const faq = [
  {
    q: "What is IPTV?",
    a: "IPTV (Internet Protocol Television) delivers television programming over the internet rather than traditional cable or satellite. You stream live channels and on-demand content through an app on your device.",
  },
  {
    q: "Which devices are supported?",
    a: "All common devices with a compatible IPTV app: Smart TVs (Samsung, LG), Fire TV Stick, Apple TV, Android/Google TV devices, iOS, Windows, and macOS.",
  },
  {
    q: "How do I set up IPTV on my Smart TV?",
    a: "Generally, you install a compatible IPTV app from your television's app store and enter your access credentials. Detailed instructions are available in our Devices section.",
  },
  {
    q: "Which IPTV apps can I use?",
    a: "You decide which compatible player you prefer – such as IPTV Smarters Pro or TiviMate. Our IPTV Apps guide gives a full overview.",
  },
  {
    q: "Do you support 4K streaming?",
    a: "Yes – on 4K-compatible hardware with a high-speed internet connection, 4K streaming is available for content broadcast in 4K. Other channels stream in crisp HD.",
  },
  {
    q: "How does the ordering and setup process work?",
    a: "In three simple steps: choose your plan, receive your credentials, and configure the app on your device. The process is explained on the Buy IPTV page.",
  },
  {
    q: "What should I do if I experience buffering?",
    a: "Buffering is usually related to local network stability. Use a wired LAN connection or strong Wi-Fi, and restart your router and app. See our troubleshooting guide for tips.",
  },
  {
    q: "How can I contact customer support?",
    a: "Via our contact page or WhatsApp. Our team is available to assist you with setup questions and order inquiries.",
  },
];

function Divider() {
  return <div className="section-divider pointer-events-none absolute top-0 inset-x-0 h-px" aria-hidden="true" />;
}

export default function EnglishHome() {
  const plans = getPlans("en");

  return (
    <div className="flex flex-col">
      {/* 1) Hero */}
      <Hero locale="en" />

      {/* 2) Live / Sport */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-2 bg-brand-gradient opacity-10 blur-2xl rounded-3xl" aria-hidden="true" />
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image src="/images/iptv-sport-streaming.jpg" alt="Streaming live sports over IPTV" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Live & Sports"
              icon={Trophy}
              title={<>Live Sports at a <span className="text-gradient">Glance</span></>}
              subtitle="Football, Formula 1, tennis, combat sports, and more – stream live sports flexibly over the internet."
            />
            <div className="grid grid-cols-3 gap-3 my-8">
              {sports.map((s) => (
                <div key={s.name} className="glass rounded-xl border border-white/8 px-3 py-3 text-center hover:border-brand-accent/40 transition-colors">
                  <div className="text-2xl mb-1" aria-hidden="true">{s.emoji}</div>
                  <div className="text-brand-text text-xs">{s.name}</div>
                </div>
              ))}
            </div>
            <Link href="/en/iptv-sports" className="inline-flex items-center gap-2 text-brand-accent hover:gap-3 transition-all font-medium">
              View All Sports Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3) Movies & Series */}
      <Suspense fallback={<MovieShowcaseSkeleton locale="en" />}>
        <MovieShowcase locale="en" />
      </Suspense>

      {/* Pricing Preview + Payment methods */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Pricing"
            icon={Wallet}
            title={<>Transparent <span className="text-gradient">Prices &amp; Plans</span></>}
            subtitle="Choose the subscription period that fits your viewing habits – no hidden fees."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
            {plans.map((plan) => (
              <PricingCard
                key={plan.id}
                title={plan.title}
                price={plan.price}
                planId={plan.id}
                duration={plan.duration}
                features={plan.features}
                isPopular={plan.isPopular}
                badge={plan.badge}
                locale="en"
              />
            ))}
          </div>
          <PaymentMethods locale="en" />
          <div className="text-center mt-8">
            <Link href="/en/pricing" className="inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              All Details on Prices &amp; Durations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4) All in One Place */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Entertainment"
            icon={Film}
            title={<>All in <span className="text-gradient">One Place</span></>}
            subtitle="Live TV, sports, movies, and series – all bundled in one service on every device."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {entertainment.map((c) => (
              <Link key={c.title} href={c.href} className="group glass rounded-2xl border border-white/8 hover:border-brand-accent/50 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-glow-cyan">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/85 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white">{c.title}</h3>
                </div>
                <div className="p-5 flex items-center justify-between gap-3">
                  <p className="text-brand-text text-sm leading-relaxed">{c.text}</p>
                  <ArrowRight className="w-5 h-5 text-brand-accent shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Problem -> Solution */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Problem & Solution"
            icon={Sparkles}
            title={<>Tired of <span className="text-gradient">Streaming Issues?</span></>}
            subtitle="Common frustration points – and how StreamGermany4K addresses them."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((p) => (
                <div key={p.title} className="glass rounded-2xl border border-white/8 p-5">
                  <p.icon className="w-6 h-6 text-brand-muted mb-3" />
                  <h3 className="text-white font-semibold mb-1">{p.title}</h3>
                  <p className="text-brand-text text-sm leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-2xl p-[1px] bg-brand-gradient">
              <div className="rounded-2xl bg-brand-card p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white mb-2">Stream with <span className="text-gradient">ease.</span></h3>
                <p className="text-brand-text mb-6">We focus on solving these exact points:</p>
                <ul className="space-y-3">
                  {solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-brand-text">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Why StreamGermany4K */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Benefits"
            icon={ShieldCheck}
            title={<>Why <span className="text-gradient">StreamGermany4K?</span></>}
            subtitle="A premium IPTV service built from the ground up for quality, stability, and simplicity."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <FeatureCard key={b.title} title={b.title} description={b.description} icon={b.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* 6b) Tech & Quality */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-last lg:order-first">
            <div className="absolute -inset-2 bg-brand-gradient opacity-10 blur-2xl rounded-3xl" aria-hidden="true" />
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/iptv-server-infrastruktur.jpg"
                alt="Modern, stability-focused streaming technology"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/60 to-transparent" />
            </div>
          </div>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Tech & Quality"
              icon={Cpu}
              title={<>Premium Quality, <span className="text-gradient">Modern Tech</span></>}
              subtitle="Engineered for picture quality, stability, and simplicity – so streaming just works."
            />
            <ul className="mt-8 space-y-4">
              {[
                { icon: MonitorPlay, title: "Picture Quality up to 4K", text: "Razor-sharp on 4K-capable screens – clean HD otherwise." },
                { icon: Zap, title: "Modern Streaming Technology", text: "Engineered for a smooth, stable stream with minimal buffering." },
                { icon: Layers, title: "Broad Device Compatibility", text: "Smart TV, Fire TV Stick, Apple TV, Android, iOS, and more." },
                { icon: Settings, title: "Clear Setup Guides", text: "Comprehensive, device-specific setup guides to get you started." },
              ].map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center shrink-0 text-brand-accent">
                    <f.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{f.title}</h3>
                    <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/en/features" className="mt-8 inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              Learn More About Features &amp; Quality <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7) Devices */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="Devices"
            icon={MonitorPlay}
            title={<>Your Devices. <span className="text-gradient">Your Streaming.</span></>}
            subtitle="From Smart TVs to streaming sticks – ready with any compatible app."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {featuredDevices.map((d) => (
              <Link key={d.title} href={d.href} className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-brand-accent/50 transition-all">
                <div className="relative aspect-[16/9] w-full">
                  <Image src={d.img} alt={d.alt} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-darker via-brand-darker/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{d.title}</h3>
                  <p className="text-brand-text text-sm mb-2">{d.text}</p>
                  <span className="inline-flex items-center gap-1 text-brand-accent text-sm font-medium">View Guide <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {deviceTiles.map((d) => (
              <Link key={d.label} href={d.href} className="glass rounded-2xl border border-white/8 hover:border-brand-accent/50 p-4 flex flex-col items-center gap-3 transition-all hover:-translate-y-1">
                <div className="relative w-full h-20">
                  <Image src={d.img} alt={d.label} fill sizes="(max-width: 640px) 40vw, 150px" className="object-contain" />
                </div>
                <span className="text-sm text-brand-text text-center">{d.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/en/devices" className="inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              All Supported Devices <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8) Apps & Players */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-12"
            eyebrow="Apps & Players"
            icon={Layers}
            title={<>Compatible <span className="text-gradient">Apps &amp; Players</span></>}
            subtitle="You choose which compatible player to use – from official stores for legal, secure streaming."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {apps.map((a) => (
              <Link key={a.name} href={a.href} className="group glass rounded-2xl border border-white/8 hover:border-brand-accent/50 p-6 transition-all hover:-translate-y-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors">{a.name}</h3>
                  <ArrowRight className="w-5 h-5 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-brand-text text-sm leading-relaxed">{a.text}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/en/iptv-apps" className="inline-flex items-center gap-1 text-brand-accent hover:gap-2 transition-all font-medium">
              All IPTV Apps <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 9) How It Works */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-14"
            eyebrow="How It Works"
            icon={Cpu}
            title={<>IPTV in <span className="text-gradient">3 Simple Steps</span></>}
            subtitle="From plan selection to your first stream – no complicated setup required."
          />
          <div className="relative">
            <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {steps.map((s) => (
                <div key={s.n} className="glass rounded-2xl border border-white/8 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl font-extrabold text-gradient opacity-80">{s.n}</span>
                    <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-brand-text leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link href="/en/order" className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gradient px-8 text-lg font-semibold text-white shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:brightness-110 transition-all">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      {/* 10) In Action */}
      <section className="py-24 bg-brand-dark relative">
        <Divider />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-12"
            eyebrow="In Action"
            icon={PlayCircle}
            title={<>How the <span className="text-gradient">Setup</span> Looks</>}
            subtitle="Authentic interface and setup screenshots from the project – transparent and genuine."
          />
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-4">
            <Image src={proofShots[0].img} alt={proofShots[0].alt} fill sizes="(max-width: 1024px) 100vw, 1152px" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-darker/70 to-transparent" />
            <span className="absolute bottom-4 left-5 text-white font-semibold">{proofShots[0].label}</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {proofShots.slice(1).map((p) => (
              <div key={p.label} className="glass rounded-xl border border-white/8 overflow-hidden">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={p.img} alt={p.alt} fill sizes="(max-width: 640px) 50vw, 220px" className="object-cover" />
                </div>
                <div className="px-3 py-2 text-center text-brand-text text-xs">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11) Transparency */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            className="mb-12"
            eyebrow="Transparency"
            icon={Star}
            title={<>Transparent, Not <span className="text-gradient">Exaggerated</span></>}
            subtitle="We prioritize honest, verified information over theatrical marketing claims."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {transparency.map((t) => (
              <div key={t} className="glass rounded-xl border border-white/8 p-5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="text-brand-text leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12) Reviews */}
      <Reviews />

      {/* 14) FAQ */}
      <Faq items={faq} heading="Frequently Asked Questions about IPTV" />

      {/* 15) Final CTA */}
      <Cta
        heading="Ready for a Better Streaming Experience?"
        text="Order in just a few simple steps or explore our setup guides first."
        primaryLabel="Order Now"
        primaryHref="/en/order"
        secondaryLabel="View Setup Guide"
        secondaryHref="/en/buy-iptv"
      />
    </div>
  );
}
