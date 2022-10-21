import { Component, CSSProperties, FC } from "react";
import styles from "./index.less";

const Border: FC<{ coverStyle: CSSProperties }> = (props) => {
  return (
    <div className={styles.border} style={props.coverStyle}>
      <div className={styles.inner}>
        {props.children}
      </div>
    </div>
  );
};

export default Border;
