import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { WidgetHost } from "@/components/widget-host";
import delta from "@/assets/delta.jpg";

export const Route = createFileRoute("/pharma/")({
  head: () => ({
    meta: [
      { title: "PNRR Pharma — Modelare farmaceutică" },
      { name: "description", content: "Predicție interactivă a concentrației a 13 compuși farmaceutici în matrice de mediu folosind un ansamblu de 11 modele de regresie." },
      { property: "og:title", content: "PNRR Pharma — Modelare farmaceutică" },
      { property: "og:description", content: "Predicție interactivă a compușilor farmaceutici din Dunăre. 11 modele, 13 ținte, 684 observații." },
    ],
  }),
  component: PharmaPage,
});

function PharmaPage() {
  return (
    <>
      <Hero />
      <WidgetSection />
      <AboutSection />
      <PharmaFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative h-[65svh] min-h-[480px] overflow-hidden">
      <img src={delta} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-12">
        <span className="hairline text-primary">Capitol V · Compusii fluviului</span>
        <h1 className="mt-6 max-w-4xl text-fluid-display font-display italic text-balance">
          Ce ascunde apa.<br />
          <span className="not-italic text-foreground/90">Modelare farmaceutică.</span>
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
          <span className="hairline text-primary">Aplicație interactivă</span>
          <h2 className="mt-5 text-3xl font-display md:text-4xl text-balance">
            Predicție live — 13 compuși, 11 modele.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Selectează un compus farmaceutic sau o clasă farmacologică, introdu predictorii de mediu
            (în ng/L) și obține un consensus weighted al ansamblului de regresie — cu breakdown
            per-model, importanța feature-urilor și metrici de validare.
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
            <WidgetHost data-pharma-app data-default-lang="ro" />
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
        <span className="hairline text-primary">Despre model</span>
        <h2 className="mt-6 text-3xl font-display md:text-4xl text-balance">
          Un ansamblu antrenat on-the-fly.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Proiectul PNRR Pharma Modeling estimează concentrația a 13 compuși farmaceutici
              (antibiotice, analgezice, beta-blocante, antidepresive etc.) în matrice de mediu
              folosind un ansamblu de 11 modele de regresie antrenate pe un dataset consolidat
              de 684 observații din bazinul Dunării.
            </p>
            <p>
              Modelele includ Ridge, Bayesian Ridge, Elastic Net, Lasso Lars, KNN, Random Forest,
              Extra Trees, AdaBoost, LightGBM, XGBoost și Procese Gaussiene. Fiecare predicție
              returnează un consensus weighted care agregă rezultatele tuturor modelelor cu
              performanță acceptabilă.
            </p>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Interfața este complet bilingvă (EN/RO) și oferă atât predicție pe compuși individuali,
              cât și pe clase farmacologice agregate. Sistemul de "Recommended" pre-completează
              combinații validate științific pentru a ghida utilizatorul.
            </p>
            <p>
              Widget-ul este self-contained — își injectează propriul CSS scoped și comunică
              direct cu API-ul de predicție. Nu necesită configurare suplimentară.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PharmaFooter() {
  return (
    <section className="border-t border-border/40 px-6 py-20 md:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <span className="hairline text-primary">Documentație</span>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Arhitectura completă a sistemului — preprocesare, cele 14 modele în detaliu,
            validare, API endpoints și ghid de utilizare.
          </p>
        </div>
        <Link
          to="/pharma/documentatie"
          className="group inline-flex items-center gap-3 rounded-full border border-primary/50 px-8 py-4 text-sm transition-all hover:bg-primary hover:text-primary-foreground"
        >
          Citește documentația
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
