import { CSSProperties, FC, useState } from 'react';
import Border from '@/pages/BigScreen/components/border';
import NumberCard from '@/pages/BigScreen/components/left/leftFirst/NumberCard';
import { Col, Row } from 'antd';

const borderStyle: CSSProperties = { height: '5.4rem' };

interface NumberSingle {
  count: number;
  desc: string;
  color: CSSProperties['color'];
}

const LeftFirst: FC = (props) => {
  const [numberList, setNumberList] = useState<NumberSingle[]>([
    { count: 46, desc: '今日任务', color: undefined },
    { count: 24, desc: '剩余任务', color: '@green-3' },
    { count: 2423, desc: '计划产量', color: undefined },
  ]);

  return (
    <Border borderStyle={borderStyle}>
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
