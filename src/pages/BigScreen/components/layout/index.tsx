import React, {CSSProperties} from 'react';
import styles from './index.less';
import {Col, Row} from "antd";
import Border from "@/pages/BigScreen/components/border";

const style:CSSProperties={backgroundColor:'red'}

const rowStyle:CSSProperties ={
  width:'100%'
}
export default function Layout() {
  return (
      <Row gutter={16} style={rowStyle}>
        <Col className="gutter-row" span={8}>
          <Border></Border>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-6</div>
        </Col>
        <Col className="gutter-row" span={8}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
  );
}
