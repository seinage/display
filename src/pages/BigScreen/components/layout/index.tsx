import {CSSProperties, FC} from 'react';
import styles from './index.less';
import {Col, Row} from "antd";
import Border from "@/pages/BigScreen/components/border";
import Left from "@/pages/BigScreen/components/left";
import Middle from "@/pages/BigScreen/components/middle";
import Right from "@/pages/BigScreen/components/Right";

const style: CSSProperties = {backgroundColor: 'red'}

const rowStyle: CSSProperties = {
  width: '100%'
}

const Layout:FC=(props)=> {
  return (
    <Row gutter={16} style={rowStyle}>
      <Col className="gutter-row" span={8}>
        <Border></Border>
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
}
export default Layout
