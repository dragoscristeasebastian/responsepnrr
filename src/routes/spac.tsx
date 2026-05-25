import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/spac")({
  head: () => ({
    meta: [
      { title: "SPAC — DANUBIA" },
      { name: "description", content: "Soft-sensors pentru parametri fizico-chimici ai apei. Prediție mutuală între indicatori de calitate." },
      { property: "og:title", content: "SPAC — DANUBIA" },
      { property: "og:description", content: "Soft-sensors pentru parametri fizico-chimici ai apei. Prediție mutuală între indicatori de calitate." },
    ],
  }),
  component: SpacPage,
});

function SpacPage() {
  useEffect(() => {
    const id = "spac-app-widget-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/spac-app.min.js";
    s.defer = true;
    document.body.appendChild(s);
  }, []);

  return (
    <>
      <section className="relative px-6 pt-32 pb-8 md:px-12 md:pt-40">
        <div className="mx-auto max-w-[1100px]">
          <span className="hairline text-primary">CAPITOL II · SOFT-SENSORS APĂ</span>
          <h1 className="mt-4 text-fluid-display font-display italic text-balance">
            Parametri fizico-chimici.
          </h1>
        </div>
      </section>

      <section className="relative px-6 pb-16 md:px-12">
        <div className="mx-auto max-w-[1100px] pt-4 pb-12">
          <div data-spac-app data-default-lang="ro" />
        </div>
      </section>
    </>
  );
}
