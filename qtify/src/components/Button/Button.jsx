// import React from "react";
// import Feedbackimage from "../../assests/Feedback.png";

// export default function Feedback() {
//   return <img src={Feedbackimage} height={"47px"} />;
// }

import React from "react";
import styles from "../Button/Button.module.css";

function Feedback() {
  return <button className={styles.button}>Give Feedback</button>;
}

export default Feedback;
