import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Timeline, { Event } from "../components/Timeline";

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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Timeline title="- Woche 1">
        {events.map((event) => (
          <Event key={event.time} time={event.time} title={event.title}>
            {event.description}
          </Event>
        ))}
      </Timeline>
    </Layout>
  );
}
