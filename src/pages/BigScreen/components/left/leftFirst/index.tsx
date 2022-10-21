import { CSSProperties, FC } from "react";
import styles from "./index.less";
import Border from "@/pages/BigScreen/components/border";
import NumberCard from "@/pages/BigScreen/components/left/leftFirst/NumberCard";

const count = 2;
const desc = "今日任务";

const coverStyle: CSSProperties = { height: "10rem" };

const LeftFirst: FC = (props) => {
  return (
    <Border coverStyle={coverStyle}>
      <div>
        <NumberCard count={count} desc={desc}></NumberCard>
      </div>
    </Border>
  );
};

export default LeftFirst;
