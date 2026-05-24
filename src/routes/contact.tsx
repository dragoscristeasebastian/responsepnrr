import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import droplet from "@/assets/droplet.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — DANUBIA" },
      { name: "description", content: "Scrie-ne despre date, colaborare sau proiecte de monitorizare a fluviului Dunărea." },
      { property: "og:title", content: "Contact — DANUBIA" },
      { property: "og:description", content: "Deschiși la colaborări în jurul datelor de mediu." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative min-h-[100svh] overflow-hidden px-6 pt-40 pb-32 md:px-12 md:pt-52">
      <img src={droplet} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-50 kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="hairline text-primary">Capitol V · Dialog</span>
          <h1 className="mt-6 text-fluid-display font-display italic text-balance">
            Scrie-ne.
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Pentru întrebări despre date, colaborări de cercetare, contribuții la modele, sau
            doar pentru a ne spune ce ai văzut în atlas.
          </p>
          <div className="mt-12 space-y-6 text-sm">
            <div>
              <div className="hairline text-muted-foreground">Email</div>
              <div className="mt-2 text-foreground">contact@hidrocronica.ro</div>
            </div>
            <div>
              <div className="hairline text-muted-foreground">Sediu</div>
              <div className="mt-2 text-foreground">București · România</div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="md:col-span-6 md:col-start-7 space-y-8 rounded-sm border border-border/60 bg-card/40 p-8 backdrop-blur-sm md:p-12"
        >
          {sent ? (
            <div className="space-y-6 py-12 text-center">
              <div className="font-display text-3xl italic text-primary">Mulțumim.</div>
              <p className="text-sm text-muted-foreground">
                Mesajul tău a fost notat. Răspundem în câteva zile.
              </p>
            </div>
          ) : (
            <>
              <Field label="Nume" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Organizație" name="org" />
              <div>
                <label className="hairline text-muted-foreground">Mesaj</label>
                <textarea
                  required
                  rows={5}
                  className="mt-3 w-full resize-none border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.02]"
              >
                Trimite
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="hairline text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
