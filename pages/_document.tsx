import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        {/* ===== GLOBAL FAVICON ===== */}
        <link rel="icon" href="/favicon.ico" />

        {/* ===== PRECONNECT FOR PERFORMANCE ===== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />

        {/* ===== PRELOAD CRITICAL ASSET ===== */}
        <link rel="preload" href="/og-image.png" as="image" />

        {/* ===== CANONICAL ===== */}
        <link rel="canonical" href="https://certif-scope.com/" />

        {/* ===== OPEN GRAPH DEFAULTS ===== */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Certif-Scope" />
        <meta property="og:image" content="https://certif-scope.com/og-image.png" />
        <meta property="og:url" content="https://certif-scope.com/" />

        {/* ===== TWITTER DEFAULTS ===== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://certif-scope.com/og-image.png" />

      </Head>

      <body suppressHydrationWarning={true}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
