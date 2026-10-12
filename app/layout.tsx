import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-geist"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains"
});

const siteUrl = "https://hartonohong.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hartono Hong // Software Developer",
    template: "%s // Hartono Hong"
  },
  description:
    "Portfolio of Hartono Hong, a Jakarta-based Software Developer building reliable backend systems and internal apps, and shipping them faster with AI agents.",
  keywords: [
    "Hartono Hong",
    "Software Developer",
    ".NET Developer",
    "SQL Server",
    "Razor",
    "Backend Developer",
    "AI Agents",
    "Claude Code",
    "Portfolio"
  ],
  authors: [{ name: "Hartono Hong", url: siteUrl }],
  creator: "Hartono Hong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Hartono Hong // Software Developer",
    description:
      "I build reliable backend systems and internal apps, and ship them faster with AI agents.",
    siteName: "Hartono Hong Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Hartono Hong // Software Developer",
    description:
      "I build reliable backend systems and internal apps, and ship them faster with AI agents."
  },
  icons: {}
};

function ThemeScript() {
  const code = `
    (() => {
      try {
        const isDark = (localStorage.getItem("theme") || "dark") === "dark";
        const faviconHref = isDark ? "/favicon-dark.svg" : "/favicon-light.svg";

        document.documentElement.classList.toggle("dark", isDark);

        const applyFavicon = () => {
          let link = document.querySelector("link[rel='icon']");
          if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
          }
          link.href = faviconHref;
        };

        applyFavicon();

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", applyFavicon, { once: true });
        }
      } catch {
        document.documentElement.classList.add("dark");
      }
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geist.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link id="theme-favicon" rel="icon" href="/favicon-dark.svg" />
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
