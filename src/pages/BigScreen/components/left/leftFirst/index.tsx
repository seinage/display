import { CSSProperties, FC } from "react";
import Border from "@/pages/BigScreen/components/border";
import NumberCard from "@/pages/BigScreen/components/left/leftFirst/NumberCard";
import { Col, Row } from "antd";

const count = 2;
const desc = "今日任务";

const coverStyle: CSSProperties = { height: "10rem" };

const LeftFirst: FC = (props) => {
  return (
    <Border coverStyle={coverStyle}>
      <Row gutter={16} style={{justifyContent:'space-around'}}>
        <Col span={7}>
          <NumberCard count={count} desc={desc}></NumberCard>
        </Col>
        <Col span={7}>
          <NumberCard count={count} desc={desc}></NumberCard>
        </Col>
        <Col span={7}>
          <NumberCard count={count} desc={desc}></NumberCard>
        </Col>
      </Row>

    </Border>
  );
};

export default LeftFirst;
