import styles from "../styles/Card.module.css";

const Card = ({ data, timeframes }) => {
  return (
    <>
      {data.map((tag, index) => {
        return (
          <div key={index} className={styles.card} style={{ backgroundColor: `${tag.color}` }}>
          <img src={tag.image} className={styles.pattern} alt="pattern"/>
            <div className={styles.card_content}>
              <div className={styles.card_title}>
                <h3> {tag.title}</h3>
                <img src="icon-ellipsis.svg" alt="" />
              </div>
              {timeframes === "daily" && (
                <div className={styles.card_text}>
                  <h1> {tag.timeframes.daily.current}hrs</h1>{" "}
                  <p> Last day - {tag.timeframes.daily.previous}</p>{" "}
                </div>
              )}
              {timeframes === "weekly" && (
                <div className={styles.card_text}>
                  {" "}
                  <h1> {tag.timeframes.weekly.current}hrs</h1>{" "}
                  <p> Last week - {tag.timeframes.weekly.previous}</p>{" "}
                </div>
              )}
              {timeframes === "monthly" && (
                <div className={styles.card_text}>
                  <h1> {tag.timeframes.monthly.current}hrs</h1>{" "}
                  <p> Last month - {tag.timeframes.monthly.previous}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
