import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://hartonohong.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hartono Hong // Software Developer",
    template: "%s // Hartono Hong"
  },
  description:
    "Portfolio of Hartono Hong, a Software Developer focused on backend services, internal business applications, system integration, and automation.",
  keywords: [
    "Hartono Hong",
    "Software Developer",
    ".NET Developer",
    "SQL Server",
    "Backend Developer",
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
      "Software Developer building reliable backend services, internal business applications, and automation tools.",
    siteName: "Hartono Hong Portfolio",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Hartono Hong portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hartono Hong // Software Developer",
    description:
      "Software Developer building reliable backend services, internal business applications, and automation tools.",
    images: ["/og-image.svg"]
  },
  icons: {}
};

function ThemeScript() {
  const code = `
    (() => {
      try {
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const theme = storedTheme || "dark";
        const isDark = theme === "dark" || (!storedTheme && prefersDark);
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link id="theme-favicon" rel="icon" href="/favicon-dark.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <ThemeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
