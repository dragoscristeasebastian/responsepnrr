import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DANUBIA — Dunărea în date" },
      { name: "description", content: "Monitorizare și prognoză cinematică a calității apei pe fluviul Dunărea. 28 de ani de date, 6 modele de prognoză, anomalii și scenarii what-if." },
      { name: "author", content: "DANUBIA" },
      { property: "og:title", content: "DANUBIA — Dunărea în date" },
      { property: "og:description", content: "Monitorizare și prognoză cinematică a calității apei pe fluviul Dunărea. 28 de ani de date, 6 modele de prognoză, anomalii și scenarii what-if." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "DANUBIA — Dunărea în date" },
      { name: "twitter:description", content: "Monitorizare și prognoză cinematică a calității apei pe fluviul Dunărea. 28 de ani de date, 6 modele de prognoză, anomalii și scenarii what-if." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ca79bbdb-eedb-4fcf-94c6-7bba224e9128/id-preview-3473185a--235db7e6-6650-493b-84e1-9daa001551e6.lovable.app-1779601987574.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ca79bbdb-eedb-4fcf-94c6-7bba224e9128/id-preview-3473185a--235db7e6-6650-493b-84e1-9daa001551e6.lovable.app-1779601987574.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      { src: "https://cdn.plot.ly/plotly-2.35.0.min.js", defer: true },
      { src: "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/water-app.min.js", defer: true },
      { src: "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/pharma-app.min.js", defer: true },
      { src: "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/pharma-docs.min.js", defer: true },
      { src: "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/spac-app.min.js", defer: true },
      { src: "https://pub-4bad77dfbee14abcb5b45d1134090a7b.r2.dev/v1/microbiome-dashboard.min.js", defer: true },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell />
    </QueryClientProvider>
  );
}

function SiteShell() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-transparent" />
      <div className="relative mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight">DANUBIA</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <NavItem to="/spac" label="SPAC" />
          <NavItem to="/prognoza" label="Prognoza" />
          <NavItem to="/pharma" label="Pharma" />
          <MetodologieMenu />
          <NavItem to="/despre" label="Despre" />
          <NavItem to="/contact" label="Contact" />
        </nav>
        <Link
          to="/prognoza"
          className="hairline rounded-full border border-primary/40 px-4 py-2 text-primary transition-colors hover:bg-primary hover:text-primary-foreground md:hidden"
        >
          Date
        </Link>
      </div>
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="hairline text-muted-foreground transition-colors hover:text-foreground"
      activeProps={{ className: "hairline text-foreground" }}
    >
      {label}
    </Link>
  );
}

function MetodologieMenu() {
  return (
    <div className="group relative flex items-center">
      <button
        type="button"
        className="hairline cursor-default bg-transparent p-0 text-muted-foreground transition-colors group-hover:text-foreground border-none"
      >
        Metodologie
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
        <div className="min-w-[200px] rounded-sm border border-border/60 bg-background/95 py-2 shadow-xl backdrop-blur-md">
          <Link
            to="/metodologie"
            className="hairline block px-5 py-2.5 text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            activeProps={{ className: "hairline block px-5 py-2.5 text-foreground bg-card/40" }}
          >
            Prognoza
          </Link>
          <Link
            to="/pharma/documentatie"
            className="hairline block px-5 py-2.5 text-muted-foreground transition-colors hover:bg-card/60 hover:text-foreground"
            activeProps={{ className: "hairline block px-5 py-2.5 text-foreground bg-card/40" }}
          >
            Farmaceutice
          </Link>
        </div>
      </div>
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/40 mt-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-4 md:px-12">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">DANUBIA</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Un proiect de monitorizare și prognoză a calității apei pe fluviul Dunărea —
            la întâlnirea dintre date deschise, statistică și contemplare.
          </p>
        </div>
        <div>
          <div className="hairline text-muted-foreground">Navigație</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/" className="hover:text-primary">Acasă</Link></li>
            <li><Link to="/spac" className="hover:text-primary">SPAC</Link></li>
            <li><Link to="/prognoza" className="hover:text-primary">Prognoza</Link></li>
            <li><Link to="/pharma" className="hover:text-primary">Pharma</Link></li>
            <li><Link to="/despre" className="hover:text-primary">Despre</Link></li>
          </ul>
        </div>
        <div>
          <div className="hairline text-muted-foreground">Sursa datelor</div>
          <p className="mt-4 text-sm text-muted-foreground">
            ICPDR — Comisia Internațională pentru Protecția Fluviului Dunărea.
            Set 1996—2023.
          </p>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-12">
          <span>© {new Date().getFullYear()} DANUBIA. Datele aparțin sursei originale.</span>
          <span />
        </div>
      </div>
    </footer>
  );
}
