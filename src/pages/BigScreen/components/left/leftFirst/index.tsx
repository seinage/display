import { CSSProperties, FC, useState } from 'react';
import Border from '@/components/border';
import { Col, Row } from 'antd';
import NumberCard from "@/components/numberCard";

const borderStyle: CSSProperties = { };

interface NumberSingle {
  count: number;
  desc: string;
  color: CSSProperties['color'];
}

/**
 * 左侧第一区块内容
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const LeftFirst: FC<{ height: string }> = (props) => {
  const [numberList, setNumberList] = useState<NumberSingle[]>([
    { count: 46, desc: '今日任务', color: undefined },
    { count: 24, desc: '剩余任务', color: '@green-3' },
    { count: 2423, desc: '计划产量', color: undefined },
  ]);

  return (
    <Border borderStyle={{ ...borderStyle, height: props.height }}>
      <Row gutter={16} style={{ justifyContent: 'space-between' }}>
        {numberList.map(({ count, desc, color }, idx) => (
          <Col span={'6'} key={idx}>
            <NumberCard count={count} desc={desc} color={color}></NumberCard>
          </Col>
        ))}
      </Row>
    </Border>
  );
};

export default LeftFirst;
