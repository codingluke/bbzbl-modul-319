import React, { useEffect, useRef, useState } from "react";
import styles from "./timeline.module.css"; import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import clsx from "clsx";

export const Event = ({ time, active, children }) => {
  return (
    <li
      className={clsx(styles.event, active ? styles.active : "")}
      data-date={time}
    >
      {children}
    </li>
  );
};

const Timeline = ({ title, children }) => {
  const getTime = () => {
    const d = new Date();
    return Number(`${d.getHours()}${d.getMinutes()}`);
  };
  const [time, setTime] = useState(getTime());

  setInterval(() => {
    setTime(getTime());
  }, 3600);

  const timeComperator = (a, b) => {
    const first = Number(a.replace(":", ""));
    if (b) {
      const second = Number(b.replace(":", ""));
      return first <= time && time < second;
    }
    return first <= time;
  };

  return (
    <div className={styles.container}>
      {title && (
        <h1>
          <div>{title}</div>
        </h1>
      )}
      <ul className={styles.timeline}>
        {React.Children.map(children, (element, index) => {
          if (
            timeComperator(element?.props.time, children[index + 1]?.props.time)
          ) {
            return React.cloneElement(element, { active: true });
          } else {
            return React.cloneElement(element);
          }
        })}
      </ul>
    </div>
  );
};

export default Timeline;
