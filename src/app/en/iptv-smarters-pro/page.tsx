import { MonitorPlay, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Set up IPTV Smarters Pro: Installation & Xtream Login (2026)",
  description:
    "Set up IPTV Smarters Pro on Smart TV, Fire TV Stick & Android: installation guide, Xtream Codes login, and tips for high-quality streaming.",
  path: "/iptv-smarters-pro",
  locale: "en",
});

const features = [
  { title: "Categorized Dashboard", text: "Clear division into Live TV, Movies, and TV Series with cover artwork, descriptions, and ratings." },
  { title: "Cross-Platform Support", text: "Available for Windows, macOS, Android, iOS, Samsung Tizen, and LG webOS." },
  { title: "Built-In High-Performance Player", text: "Integrated ExoPlayer and VLC engines provide smooth 4K & Full HD stream rendering." },
  { title: "Parental Control & EPG", text: "Configure parental PIN locks for mature content and browse interactive EPG schedule guides." },
];

const faq = [
  {
    q: "Where can I safely download IPTV Smarters Pro?",
    a: "On Android TV and Fire TV, install via the Downloader app or download the APK directly from the official IPTV Smarters website. For iOS, Samsung, and LG, search the respective official app stores.",
  },
  {
    q: "How do I log into StreamGermany4K in IPTV Smarters Pro?",
    a: "On the login screen, choose 'Login with Xtream Codes API' and fill in your profile name, username, password, and Server URL.",
  },
  {
    q: "Is IPTV Smarters Pro free to use?",
    a: "Yes, the standard version of IPTV Smarters Pro is completely free of charge.",
  },
];

export default function SmartersProEnglishPage() {
  return (
    <div className="pt-32 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/en" },
            { name: "IPTV Apps", path: "/en/iptv-apps" },
            { name: "IPTV Smarters Pro", path: "/en/iptv-smarters-pro" },
          ]}
        />

        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-sm font-medium mb-4">
            <MonitorPlay className="w-4 h-4" />
            IPTV Smarters Pro Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Set Up &amp; Use <span className="text-brand-accent">IPTV Smarters Pro</span>
          </h1>
          <p className="text-brand-text text-lg leading-relaxed">
            IPTV Smarters Pro is one of the most widely used all-in-one multimedia players. It offers an intuitive
            user interface and effortless Xtream Codes setup across virtually any device.
          </p>
        </div>

        {/* Features Grid */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Highlights of IPTV Smarters Pro</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl border border-brand-gray/50 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                <h3 className="text-xl font-bold text-white">{f.title}</h3>
              </div>
              <p className="text-brand-text text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Setup steps */}
        <div className="glass rounded-2xl border border-brand-gray/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Login via Xtream API</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Open App &amp; Click &quot;Add User&quot;</h3>
                <p className="text-brand-text">
                  Choose the option <strong>Login with Xtream Codes API</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Enter Your Credentials</h3>
                <p className="text-brand-text">
                  Enter any profile name (e.g. &quot;StreamGermany4K&quot;), followed by your username, password, and Server URL.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Confirm &quot;Add User&quot;</h3>
                <p className="text-brand-text">
                  The application synchronizes your channel catalog and organizes Live TV, Movies, and Series automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Faq items={faq} heading="Frequently Asked Questions about IPTV Smarters Pro" />

      <Cta
        heading="Start IPTV Smarters Pro with StreamGermany4K"
        text="Experience seamless streaming in HD and 4K on your preferred device."
        primaryLabel="Compare Plans"
        primaryHref="/en/pricing"
        secondaryLabel="Buy IPTV"
        secondaryHref="/en/order"
      />
    </div>
  );
}
