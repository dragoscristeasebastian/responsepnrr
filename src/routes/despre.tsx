import { createFileRoute } from "@tanstack/react-router";
import delta from "@/assets/delta.jpg";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre proiect — DANUBIA" },
      { name: "description", content: "Context, surse de date și tehnologii din spatele monitorizării calității apei pe Dunăre." },
      { property: "og:title", content: "Despre proiect — DANUBIA" },
      { property: "og:description", content: "Un proiect deschis de monitorizare a calității apei Dunării." },
    ],
  }),
  component: Despre,
});

function Despre() {
  return (
    <>
      <section className="relative h-[70svh] min-h-[480px] overflow-hidden">
        <img src={delta} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover kenburns" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 md:px-12">
          <span className="hairline text-primary">Capitol IV · Origine</span>
          <h1 className="mt-6 max-w-3xl text-fluid-display font-display italic text-balance">
            Despre proiect.
          </h1>
        </div>
      </section>

      <section className="px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="text-3xl font-display md:text-4xl">
              Un fluviu, multe granițe, o singură apă.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Dunărea traversează zece țări și colectează apele a patruzeci de afluenți majori.
                Calitatea ei chimică, biologică și fizică este, în consecință, o mărturie despre
                jumătate de continent. Monitorizarea ei nu este o opțiune — este o obligație
                comună a statelor riverane, coordonată de ICPDR.
              </p>
              <p>
                Proiectul de față ia datele publice deschise — eșantionate periodic, de-a lungul
                a trei decenii, în puncte cheie pe cursul fluviului — și le pune într-o formă în
                care pot fi <em>privite</em>. Nu doar consultate ca tabele, ci văzute ca tendințe,
                ca anomalii, ca scenarii.
              </p>
              <p>
                Este o încercare de a apropia datele de mediu de publicul larg, fără să le diluăm
                rigoarea. Cercetătorii rămân cu cifrele exacte. Cititorii obișnuiți pleacă cu
                o intuiție.
              </p>
            </div>
          </div>

          <aside className="md:col-span-4 md:col-start-9 space-y-12">
            <InfoBlock label="Perioadă" value="1996 — 2023" />
            <InfoBlock label="Sursa primară" value="ICPDR" sub="Comisia Internațională pentru Protecția Fluviului Dunărea" />
            <InfoBlock label="Frecvență" value="Eșantionare lunară" sub="agregată anual pentru modelele lungi" />
            <InfoBlock label="Parametri" value="16" sub="fizico-chimici, nutrienți, indicatori biologici" />
            <InfoBlock label="Stack" value="Python · scikit-learn · LightGBM · Prophet · statsmodels · Plotly" />
          </aside>
        </div>
      </section>

      <section className="border-t border-border/40 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1100px]">
          <span className="hairline text-primary">Date deschise</span>
          <h2 className="mt-6 text-3xl font-display md:text-4xl text-balance">
            Tot ce vezi aici poate fi reprodus.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Setul de date original este public. Modelele, codul de antrenare și backtest-urile
            sunt deschise. Vrem ca rezultatele noastre să poată fi puse la îndoială și reanalizate
            de oricine — asta este, în fond, condiția de bază a unei monitorizări serioase.
          </p>
        </div>
      </section>
    </>
  );
}

function InfoBlock({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="border-l border-primary/40 pl-5">
      <div className="hairline text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl text-foreground">{value}</div>
      {sub && <div className="mt-1 text-xs text-muted-foreground">{sub}</div>}
    </div>
  );
}
