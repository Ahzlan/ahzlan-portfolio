import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://Ahzlan.github.io/ahzlan-portfolio/a-logo-rounded.png"
          type="image/x-icon"
        />

        <title>{`Ahzlan's Portfolio`}</title>

        <meta name="title" content="Ahzlan's Portfolio" />
        <meta name="description" content="Ahzlan's Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ahzlan's Portfolio" />
        <meta property="og:description" content="Ahzlan's Portfolio" />
        <meta
          property="og:image"
          content="https://Ahzlan.github.io/ahzlan-portfolio/a-logo-rounded.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Ahzlan's Portfolio" />
        <meta
          property="twitter:description"
          content="Ahzlan's Portfolio"
        />
        <meta
          property="twitter:image"
          content="https://Ahzlan.github.io/ahzlan-portfolio/a-logo-rounded.png"
        />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;
