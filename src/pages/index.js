import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';


import styles from "./index.module.css";
import Link from "@docusaurus/Link";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div>
          <p>
            Hier finden Sie Informationen und Unterlagen zum Unterricht.
            <br />
            Ausserdem finden Sie auch weiterführende Links. Auf diese werden Sie
            im Unterricht nicht ausdrücklich hingewiesen.
          </p>
          <Link className="button button--primary" to="/docs">
            Hier geht es zum Inhalt
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
    </Layout>
  );
}
