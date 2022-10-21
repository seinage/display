import { FC } from "react";
import styles from "./index.less";

const NumberCard: FC<{ count: number, desc: string }> = (props) => {
  return (
    <>
      <div className={styles.count}>44</div>
      <div className={styles.desc}>今日任务</div>
    </>
  );
};

export default NumberCard;
