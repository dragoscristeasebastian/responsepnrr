import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroDanube from "@/assets/hero-danube.jpg";
import underwater from "@/assets/underwater.jpg";
import delta from "@/assets/delta.jpg";
import heron from "@/assets/heron.jpg";
import droplet from "@/assets/droplet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hidrocronică — Dunărea în date" },
      { name: "description", content: "O experiență cinematică pentru a vedea, înțelege și prognoza calitatea apei pe fluviul Dunărea." },
      { property: "og:title", content: "Hidrocronică — Dunărea în date" },
      { property: "og:description", content: "28 de ani, 16 parametri, 6 modele. Un atlas viu al fluviului." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhyItMatters />
      <KeyNumbers />
      <Teaser />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      {/* Video background with image poster fallback */}
      <div className="absolute inset-0">
        <img
          src={heroDanube}
          alt="Fluviul Dunărea în zori, ceață peste apă"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover kenburns"
        />
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster={heroDanube}
          preload="metadata"
        >
          <source
            src="https://cdn.pixabay.com/video/2020/12/10/58739-489842086_large.mp4"
            type="video/mp4"
          />
        </video>
        {/* atmospheric overlays */}
        {/* Golden sun rays + glow, positioned where the sun sits in the hero */}
        <div
          className="sun-rays"
          style={{ top: "-20%", left: "35%", width: "70%", height: "100%" }}
          aria-hidden
        />
        <div
          className="sun-glow"
          style={{ top: "8%", left: "46%", width: "320px", height: "320px" }}
          aria-hidden
        />
        {/* Drifting mist layers over the river */}
        <div className="mist-layer mist-layer-1" aria-hidden />
        <div className="mist-layer mist-layer-2" aria-hidden />
        <div className="mist-layer mist-layer-3" aria-hidden />

        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
        <div className="absolute inset-0 shimmer mix-blend-overlay opacity-60" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 md:px-12 md:pb-32">
        <span className="hairline reveal text-primary">Capitol I · Fluviul observat</span>
        <h1 className="reveal-slow mt-6 max-w-5xl text-fluid-hero font-display italic text-balance">
          Dunărea curge.<br />
          <span className="not-italic text-foreground/90">Datele ne spun cum.</span>
        </h1>
        <p className="reveal mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Douăzeci și opt de ani de măsurători, șaisprezece parametri, șase modele de prognoză —
          adunate într-un singur loc, ca să poți privi fluviul mai atent.
        </p>
        <div className="reveal mt-10 flex flex-wrap items-center gap-6">
          <Link
            to="/date-live"
            className="group relative inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_var(--color-primary)]"
          >
            Intră în date
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            to="/metodologie"
            className="hairline text-muted-foreground transition-colors hover:text-foreground"
          >
            Cum funcționează
          </Link>
        </div>
      </div>

      {/* slow waves at bottom */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-[200%]"
        viewBox="0 0 2400 120"
        preserveAspectRatio="none"
        style={{ animation: "wave 24s linear infinite" }}
      >
        <path
          d="M0,60 C300,100 600,20 1200,60 C1800,100 2100,20 2400,60 L2400,120 L0,120 Z"
          fill="oklch(0.14 0.03 232)"
          opacity="0.7"
        />
      </svg>
    </section>
  );
}

function WhyItMatters() {
  const items = [
    {
      kicker: "01 / Memorie",
      title: "Un fluviu îmbătrânește lent.",
      body: "Calitatea apei se schimbă pe scări de timp pe care un singur an nu le poate spune. Privind înapoi 28 de ani, vedem ritmul real al schimbării.",
      img: delta,
    },
    {
      kicker: "02 / Avertizare",
      title: "Anomaliile nu așteaptă.",
      body: "Detectăm devieri statistice față de comportamentul așteptat al fiecărui parametru și le scoatem la suprafață înainte să devină tendințe.",
      img: droplet,
    },
    {
      kicker: "03 / Scenarii",
      title: "Ce-ar fi dacă...",
      body: "Modelele vectoriale ne permit să simulăm impactul unui șoc — o creștere de azotați, o scădere de oxigen — asupra restului ecosistemului chimic.",
      img: underwater,
    },
  ];

  return (
    <section className="relative bg-background py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="mb-24 max-w-2xl">
          <span className="hairline text-primary">De ce contează</span>
          <h2 className="mt-6 text-fluid-display font-display text-balance">
            Trei motive pentru<br />
            <em className="text-muted-foreground">a privi mai atent.</em>
          </h2>
        </div>
        <div className="space-y-32">
          {items.map((it, i) => (
            <article
              key={it.kicker}
              className={`grid gap-10 md:grid-cols-12 md:items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="md:col-span-7">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={it.img}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] h-full w-full object-cover transition-transform duration-[2s] hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:col-span-5">
                <span className="hairline text-primary">{it.kicker}</span>
                <h3 className="mt-5 text-3xl font-display md:text-4xl text-balance">{it.title}</h3>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">{it.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function KeyNumbers() {
  const stats = [
    { n: "28", label: "ani de date", sub: "1996 — 2023" },
    { n: "16", label: "parametri urmăriți", sub: "fizico-chimici și biologici" },
    { n: "6", label: "modele de prognoză", sub: "lunare și anuale" },
    { n: "295", label: "anomalii detectate", sub: "z-score pe rezidual STL" },
  ];
  return (
    <section className="relative overflow-hidden border-y border-border/40 bg-card/40 py-24 md:py-32">
      <div className="absolute inset-0 opacity-30">
        <img src={heron} alt="" aria-hidden className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <span className="hairline text-primary">În cifre</span>
        <div className="mt-16 grid gap-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="group">
              <div className="font-display text-6xl md:text-7xl text-foreground transition-colors group-hover:text-primary">
                {s.n}
              </div>
              <div className="mt-3 text-sm text-foreground">{s.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teaser() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      <div className="absolute inset-0">
        <img
          src={underwater}
          alt=""
          aria-hidden
          className="h-full w-full object-cover kenburns"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6 text-center md:px-12">
        <span className="hairline text-primary">Date Live</span>
        <h2 className="mt-8 text-fluid-display font-display italic text-balance">
          Sub suprafață, datele așteaptă.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Șase ferestre interactive: prognoze lunare și anuale, anomalii, simulări what-if,
          leaderboard al modelelor, comparații între parametri.
        </p>
        <div className="mt-12">
          <Link
            to="/date-live"
            className="group inline-flex items-center gap-3 rounded-full border border-primary/50 px-8 py-4 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Deschide atlasul
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
