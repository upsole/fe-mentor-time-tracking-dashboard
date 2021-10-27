import styles from "../styles/Card.module.css";
import Card from "./Card";

const CardGrid = ({ data, filterfunc, timeframes }) => {
  return (
    <div className={styles.grid}>
      <div className={styles.person_card}>
        <div className={styles.person_section}>
          <img src="image-jeremy.png" alt="" />
          <div>
            <p> Report for </p>
            <h1> Jeremy Jobson</h1>
          </div>
        </div>
        <div className={styles.person_buttons}>
          <button onClick={() => filterfunc("daily")}> Daily </button>
          <button onClick={() => filterfunc("weekly")}> Weekly </button>
          <button onClick={() => filterfunc("monthly")}> Monthly </button>
        </div>
      </div>
      <Card data={data} timeframes={timeframes} />
    </div>
  );
};

export default CardGrid;
