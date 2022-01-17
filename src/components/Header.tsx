import { useState } from "react";
import styles from "./Header.module.css";
import ReactJson from "react-json-view";

export const Header = ({ dsmData }: { dsmData: JSON }) => {
  const [showData, setShowData] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerBar}>
        <h1>DSM ToDo Demo</h1>
        <button
          className={styles.dsmDataToggle}
          onClick={() => setShowData(!showData)}
        >
          {showData ? "hide" : "show"} raw DSM data
        </button>
      </div>
      <div
        className={`${!showData ? styles.hidden : ""} ${
          showData ? styles.showData : ""
        }`}
      >
        <ReactJson
          src={dsmData}
          theme="monokai"
          style={{ textAlign: "start", padding: "1rem" }}
        />
      </div>
    </div>
  );
};
