import { CSSProperties, FC } from 'react';
import { Col, Row } from 'antd';
import Left from '@/pages/BigScreen/components/left';
import Middle from '@/pages/BigScreen/components/middle';
import Right from '@/pages/BigScreen/components/Right';


const rowStyle: CSSProperties = {
  width: '100%',
};

const Layout: FC = (props) => {
  return (
    <Row gutter={16} style={rowStyle}>
      <Col className="gutter-row" span={8}>
        <Left></Left>
      </Col>
      <Col className="gutter-row" span={8}>
        <Middle></Middle>
      </Col>
      <Col className="gutter-row" span={8}>
        <Right></Right>
      </Col>
    </Row>
  );
};
export default Layout;
