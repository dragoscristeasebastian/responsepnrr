import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/microbiome")({
  head: () => ({
    meta: [
      { title: "Microbiom — DANUBIA" },
      { name: "description", content: "Analiza microbiomului fluviului Dunărea. Date de secvențiere și vizualizare interactivă." },
      { property: "og:title", content: "Microbiom — DANUBIA" },
      { property: "og:description", content: "Analiza microbiomului fluviului Dunărea. Date de secvențiere și vizualizare interactivă." },
    ],
  }),
  component: MicrobiomePage,
});

function MicrobiomePage() {
  return (
    <>
      <section className="relative px-6 pt-32 pb-8 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1100px]">
          <span className="hairline text-primary">CAPITOL IV · MICROBIOM</span>
          <h1 className="mt-4 text-fluid-display font-display italic text-balance">
            Analiza microbiomului.
          </h1>
        </div>
      </section>

      <section className="relative px-6 pb-16 md:px-12">
        <div className="mx-auto max-w-[1440px] pt-4 pb-12">
          <div
            data-microbiome-dashboard
            data-data-url="https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/data"
            data-default-dataset="water_genus"
            data-default-section="overview"
            suppressHydrationWarning
            style={{ width: "100%", minHeight: "calc(100vh - 120px)" }}
          />
        </div>
      </section>
    </>
  );
}
