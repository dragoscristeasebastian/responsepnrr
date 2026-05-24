import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import underwater from "@/assets/underwater.jpg";

export const Route = createFileRoute("/pharma/documentatie")({
  head: () => ({
    meta: [
      { title: "Documentație Pharma — DANUBIA" },
      { name: "description", content: "Documentație tehnică completă pentru modelarea farmaceutică a compușilor din Dunăre. Arhitectură, modele, validare, API." },
      { property: "og:title", content: "Documentație Pharma — DANUBIA" },
      { property: "og:description", content: "Arhitectură, 14 modele de regresie, validare, API endpoints și ghid de utilizare." },
    ],
  }),
  component: PharmaDocsPage,
});

function PharmaDocsPage() {
  useEffect(() => {
    const id = "pharma-docs-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/pharma-docs.min.js";
    s.defer = true;
    document.body.appendChild(s);
    return () => {
      const existing = document.getElementById(id);
      if (existing) existing.remove();
    };
  }, []);

  return (
    <>
      <Hero />
      <WidgetSection />
      <AboutSection />
      <DocsFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[60svh] min-h-[420px] overflow-hidden">
      <img src={underwater} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-12">
        <span className="hairline text-primary">Capitol VI · Documentație</span>
        <h1 className="mt-6 max-w-4xl text-fluid-display font-display italic text-balance">
          Arhitectura din spate.<br />
          <span className="not-italic text-foreground/90">Modele, date, validare.</span>
        </h1>
      </div>
    </section>
  );
}

function WidgetSection() {
  return (
    <section className="px-3 pt-12 pb-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 max-w-[1100px]">
          <span className="hairline text-primary">Documentație tehnică</span>
          <h2 className="mt-5 text-3xl font-display md:text-4xl text-balance">
            Tot ce trebuie să știi despre sistem.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Documentația acoperă întregul pipeline — de la preprocesarea datelor până la
            validarea finală. Este bilingvă (EN/RO) și include code blocks, tabele de
            comparare și carduri pentru fiecare model în parte.
          </p>
        </div>
        <div className="relative">
          <div className="absolute -inset-px rounded-sm bg-gradient-to-b from-primary/20 to-transparent opacity-50 blur-sm" />
          <div
            className="relative rounded-sm border border-border/60 bg-card/50 p-2 md:p-6"
            style={
              {
                "--ph-accent": "oklch(0.78 0.10 195)",
                "--ph-radius": "4px",
                "--ph-bg": "oklch(0.20 0.035 230 / 0.6)",
              } as React.CSSProperties
            }
          >
            <div data-pharma-docs />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <span className="hairline text-primary">Structură</span>
        <h2 className="mt-6 text-3xl font-display md:text-4xl text-balance">
          10 capitole, 24 de secțiuni, 83 de combinații validate.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Documentația este organizată ca un manual tehnic complet: începe cu arhitectura
              sistemului și preprocesarea datelor, continuă cu descrierea detaliată a fiecăruia
              dintre cele 14 modele de regresie (de la Ridge și Bayesian până la LightGBM,
              XGBoost și Procese Gaussiene), și se încheie cu validarea, API endpoints și
              limitările cunoscute.
            </p>
            <p>
              Fiecare model are propriul card cu hiperparametri, funcție de cost, avantaje și
              dezavantaje. Tabela de selecție a algoritmilor explică criteriul de alegere a
              modelului în funcție de tipul de date și dimensiunea setului.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Un capitol dedicat prezintă cele 83 de combinații target–predictori care ating
              R² &gt; 0.2 — acestea sunt combinațiile recomandate în interfața interactivă.
              Predicția pe clase farmacologice agregate este de asemenea documentată pe larg.
            </p>
            <p>
              Conținutul este complet bilingv (EN ↔ RO) și poate fi navigat prin TOC-ul sticky
              din partea stângă. Widget-ul își gestionează propriul state de limbă — nu
              interacționează cu restul aplicației.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocsFooter() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <span className="hairline text-primary">Aplicație interactivă</span>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Rulează predicții live pentru 13 compuși farmaceutici și clase farmacologice.
            Consensus weighted, breakdown per-model, feature importance.
          </p>
        </div>
        <Link
          to="/pharma"
          className="group inline-flex items-center gap-3 rounded-full border border-primary/50 px-8 py-4 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Deschide aplicația
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
