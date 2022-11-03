import { FC } from "react";
import Border from "@/components/border";
import { Col, Row } from "antd";

const RightThird:FC<{ height: string }> = (props) => {
 return (
   <Row gutter={16}>
     <Col span={12}>
       <Border borderStyle={{height:props.height}}></Border>
     </Col>
     <Col span={12}>
       <Border borderStyle={{height:props.height}}></Border>
     </Col>
   </Row>

 );
};

export default RightThird;
