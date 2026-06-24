import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow text-[color:var(--crimson)]">Error 404</p>
        <h1 className="mt-4 text-6xl font-display">Page not found</h1>
        <p className="mt-3 text-sm text-neutral-600">
          The page you are looking for has wandered off the menu.
        </p>
        <Link to="/" className="btn-cta btn-cta-hover mt-8">Return Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-display">Something went wrong</h1>
        <p className="mt-2 text-sm text-neutral-600">Please try again.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="btn-cta btn-cta-hover mt-6"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Chand Sweets — A Legacy of Taste, Kanpur" },
      { name: "description", content: "Chand Sweets, Kanpur — heritage mithai, famous lassi, biryani and chicken burger. Crafted with tradition since generations." },
      { name: "author", content: "Chand Sweets" },
      { property: "og:title", content: "Chand Sweets — A Legacy of Taste, Kanpur" },
      { property: "og:description", content: "Heritage mithai, famous lassi, biryani and more — crafted in Kanpur with timeless tradition." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bagel+Fat+One&family=Bowlby+One&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Allura&family=Inter+Tight:wght@300..700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
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
      <Outlet />
    </QueryClientProvider>
  );
}
