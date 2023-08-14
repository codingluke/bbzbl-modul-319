import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Quartalsübersicht",
    url: "/bbzbl-modul-319/docs/lektionen",
    Svg: "📅",
    description: (
      <>
        Hier gelangen Sie auf die Lektionenübersicht. Schauen Sie genau,{" "}
        <b>wann</b> die LBs sind!
      </>
    ),
  },
  {
    title: "Prüfungsübersicht",
    url: "/bbzbl-modul-319/docs/beurteilungen",
    Svg: "🏅",
    description: (
      <>
        Hier werden alle Leistungsbeurteilungen genau erläutert. Lesen Sie diese
        genau durch, damit Sie sich optimal darauf vorbereiten können.
      </>
    ),
  },
  {
    title: "Modulbeschreibung",
    url: "/bbzbl-modul-319/docs#modulidentifikation",
    Svg: "📋",
    description: <>Hier finden Sie die offizielle Berschreibung des Moduls.</>,
  },
];

function Feature({ Svg, title, description, url }) {
  return (
    <a href={url} className={clsx("col col--4", styles.featureLink)}>
      <div className={clsx("text--center", styles.featureSvg)}>
        {Svg}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
