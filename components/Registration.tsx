import { CalendarEvent } from "tabler-icons-react";
import styles from "../styles/Registration.module.css";

const Registration = () => {
  return (
    <div className={styles.parent}>
      <h2 className={styles.eventHeader}>Register</h2>
      <div className={styles.container}>
        <div className={styles.eventContainer}>
          <p>The Symposium will be held on</p>
          <div className={styles.eventDateContainer}>
            <CalendarEvent color={"#03a9f4"} className={styles.calendarIcon} />
            <p>11 Jan, 2023</p>
          </div>
        </div>

        <div className={styles.regRuleContainer}>
          <p>Registration can only be done online</p>
          <a href="#">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
