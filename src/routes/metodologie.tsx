import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/metodologie")({
  head: () => ({
    meta: [
      { title: "Metodologie — DANUBIA" },
      { name: "description", content: "Cele șase modele de prognoză, backtest walk-forward, detecția anomaliilor și simularea what-if pentru calitatea apei Dunării." },
      { property: "og:title", content: "Metodologie — DANUBIA" },
      { property: "og:description", content: "Cum prognozăm calitatea apei pe Dunăre." },
    ],
  }),
  component: Metodologie,
});

const monthlyModels = [
  { name: "SARIMA", desc: "Model statistic clasic care prinde sezonalitatea anuală a parametrilor și tendința lor pe termen lung." },
  { name: "Prophet", desc: "Decompoziție aditivă — trend, sezonalitate, evenimente — robustă la lipsuri de date." },
  { name: "VAR", desc: "Vector AutoRegression. Tratează parametrii ca un sistem interdependent — ideal pentru what-if." },
  { name: "LightGBM", desc: "Gradient boosting pe features temporale derivate (lag-uri, medii mobile, ferestre)." },
  { name: "SeasonalNaive", desc: "Baseline puternic: prognoza este pur și simplu valoarea de acum un an. Greu de bătut." },
  { name: "Ensemble", desc: "Combinație ponderată a celorlalte cinci, ponderea învățată din backtest." },
];

const annualModels = [
  { name: "AutoARIMA", desc: "Selecție automată a ordinii (p,d,q) pentru serii anuale scurte." },
  { name: "ETS", desc: "Exponential Smoothing — trend și nivel pentru evoluții lente." },
  { name: "Prophet", desc: "Versiunea anuală, cu prior-uri ajustate pentru orizonturi de 5—10 ani." },
  { name: "LightGBM", desc: "Boosting pe agregări anuale și covariate." },
  { name: "LinearTrend", desc: "Regresie liniară simplă — reperul împotriva căruia validăm restul." },
];

function Metodologie() {
  return (
    <>
      <section className="px-6 pt-40 pb-20 md:px-12 md:pt-52">
        <div className="mx-auto max-w-[1100px]">
          <span className="hairline text-primary">Capitol III · Metodă</span>
          <h1 className="mt-6 text-fluid-display font-display italic text-balance">
            Cum prognozăm<br />
            <span className="not-italic text-muted-foreground">un fluviu.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nu există un singur model corect. Folosim mai multe în paralel, fiecare cu
            ipotezele lui — și le validăm unul împotriva celuilalt pe date pe care nu
            le-au văzut niciodată.
          </p>
        </div>
      </section>

      <Section title="Modele lunare" kicker="01 / Orizont scurt">
        <Grid items={monthlyModels} />
      </Section>

      <Section title="Modele anuale" kicker="02 / Orizont lung">
        <Grid items={annualModels} />
      </Section>

      <Section title="Backtest walk-forward" kicker="03 / Validare">
        <Prose>
          Antrenăm fiecare model pe o fereastră de date istorice, prognozăm câțiva pași
          înainte, comparăm cu observațiile reale, apoi avansăm fereastra și repetăm. Erorile
          obținute (MAE, RMSE, MAPE) sunt singura monedă cu care comparăm modelele între ele.
          Ponderile ensemble-ului provin din acest exercițiu — nu sunt fixate de mână.
        </Prose>
      </Section>

      <Section title="Detecția anomaliilor" kicker="04 / Semnal">
        <Prose>
          Pe fiecare serie aplicăm o decompoziție STL (Seasonal-Trend by LOESS), apoi calculăm
          z-score-ul reziduurilor. Punctele care depășesc un prag (tipic |z| &gt; 3) sunt marcate
          ca anomalii. Pentru parametri normați (DCA, apă potabilă), suprapunem și pragurile
          legale — uneori semnalul statistic și cel normativ nu coincid, iar diferența contează.
        </Prose>
      </Section>

      <Section title="Simulare what-if" kicker="05 / Scenarii">
        <Prose>
          Modelul VAR învață cum se mișcă parametrii împreună. Asta permite o întrebare
          simplă: dacă oxigenul dizolvat scade brusc cu 20%, ce se întâmplă cu azotații?
          Cu pH-ul? Răspunsul nu este o predicție certă, ci un scenariu — util pentru a
          discuta intervenții înainte ca ele să fie necesare.
        </Prose>
      </Section>

      <Section title="Ținte normative" kicker="06 / Context">
        <Prose>
          Comparăm valorile măsurate și prognozate cu țintele Directivei Cadru Apă (DCA) și
          cu standardele pentru apă potabilă. Aceste linii apar peste grafice — nu pentru a
          declara conformitate, ci pentru a oferi un cadru de citire imediat.
        </Prose>
      </Section>
    </>
  );
}

function Section({
  title,
  kicker,
  children,
}: {
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border/40 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="hairline text-primary">{kicker}</span>
          <h2 className="mt-5 text-4xl font-display md:text-5xl text-balance">{title}</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">{children}</div>
      </div>
    </section>
  );
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-base leading-relaxed text-muted-foreground md:text-lg">{children}</p>;
}

function Grid({ items }: { items: { name: string; desc: string }[] }) {
  return (
    <div className="grid gap-px bg-border/40 md:grid-cols-2">
      {items.map((m) => (
        <div key={m.name} className="bg-background p-6 transition-colors hover:bg-card">
          <div className="font-display text-2xl text-primary">{m.name}</div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
        </div>
      ))}
    </div>
  );
}
