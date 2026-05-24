import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/prognoza")({
  head: () => ({
    meta: [
      { title: "Prognoza — Hidrocronică" },
      { name: "description", content: "Atlas interactiv al calității apei: prognoze, anomalii, scenarii what-if și comparații între parametrii Dunării." },
      { property: "og:title", content: "Prognoza — Hidrocronică" },
      { property: "og:description", content: "Șase ferestre interactive peste 28 de ani de date." },
    ],
  }),
  component: DateLive,
});

function DateLive() {
  useEffect(() => {
    const id = "water-app-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/water-app.min.js";
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <>
      <section className="relative px-6 pt-40 pb-20 md:px-12 md:pt-52">
        <div className="mx-auto max-w-[1100px]">
          <span className="hairline text-primary">Capitol II · Atlasul</span>
          <h1 className="mt-6 text-fluid-display font-display italic text-balance">
            Date Live.
          </h1>
          <div className="mt-12 grid gap-8 md:grid-cols-2 md:gap-16">
            <p className="text-lg leading-relaxed text-foreground">
              Ce vezi mai jos este o suprafață vie. Șase ferestre înlănțuite — prognoze
              lunare și anuale, detectare de anomalii, simulări what-if, un leaderboard
              al modelelor și un instrument de comparație — toate construite peste același
              set de 28 de ani de măsurători ICPDR.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Folosește filele din partea de sus a widget-ului pentru a naviga între
              perspective. Datele se încarcă din serverul de prognoză și se actualizează
              atunci când modelele sunt re-antrenate.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-3 pb-24 md:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative">
            <div className="absolute -inset-px rounded-sm bg-gradient-to-b from-primary/20 to-transparent opacity-50 blur-sm" />
            <div
              className="relative rounded-sm border border-border/60 bg-card/50 p-2 md:p-6"
              style={
                {
                  // Theme the widget into our palette
                  "--wa-accent": "oklch(0.78 0.10 195)",
                  "--wa-radius": "4px",
                  "--wa-card": "oklch(0.20 0.035 230 / 0.6)",
                } as React.CSSProperties
              }
            >
              <div data-water-app />
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-muted-foreground">
            Sursa datelor: <span className="text-foreground">ICPDR</span> — Comisia
            Internațională pentru Protecția Fluviului Dunărea · perioada 1996—2023 ·
            modele de prognoză antrenate intern.
          </p>
        </div>
      </section>
    </>
  );
}
