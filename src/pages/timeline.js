import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./timeline.module.css";

const events = [
  {
    time: "12:45",
    title: "Vorstellung",
    description: <p>Modulidentifikation</p>,
  },
  {
    time: "13:10",
    title: "Vom Algorithmus zum Programm",
    description: (
      <>
        <p>
          🧑‍🏫 Präsentation / <b>Diskussion</b>
        </p>
        <p>
          <b>☕️ 13:30</b>
        </p>
      </>
    ),
  },
  {
    time: "14:20",
    title: "☕️ Grosse Pause",
    description: <></>,
  },
  {
    time: "14:40",
    title: "Grundstrukturen",
    description: (
      <>
        <p>📝 Aufgaben Lösen</p>
      </>
    ),
  },
  {
    time: "14:50",
    title: "Hallo Welt",
    description: (
      <>
        <p>👩‍💻 in Eclipse zusammen!</p>
        <p>
          <b>15:30 ☕️</b>
        </p>
      </>
    ),
  },
  {
    time: "15:50",
    title: "🧑‍🏫 Code-Konventionen",
    description: <></>,
  },
  {
    time: "16:15",
    title: "🏝️",
    description: <></>,
  },
];

const Timeline = ({ events }) => {
  return (
    <div id="content">
      <h1>Timeline Concept</h1>
      <ul className={styles.timeline}>
        {events.map(({ time, title, description }) => (
          <li className={styles.event} data-date={time}>
            <h2>{title}</h2>
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Timeline events={events} />
    </Layout>
  );
}
