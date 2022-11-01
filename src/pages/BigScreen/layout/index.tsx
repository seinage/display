import { CSSProperties, FC } from 'react';
import { Col, Row } from 'antd';
import Left from '@/pages/BigScreen/components/left';
import Middle from '@/pages/BigScreen/components/middle';
import Right from '@/pages/BigScreen/components/Right';
import styles from './index.less'


const rowStyle: CSSProperties = {
  width: '100%',
};

const Layout: FC = (props) => {
  return (
    <Row gutter={16} style={rowStyle}>
      <Col className={styles.left} span={8}>
        <Left></Left>
      </Col>
      <Col className={styles.middle} span={8}>
        <Middle></Middle>
      </Col>
      <Col className={styles.right} span={8}>
        <Right></Right>
      </Col>
    </Row>
  );
};
export default Layout;
