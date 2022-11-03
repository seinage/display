import { FC } from "react";
import Border from "@/components/border";

const RightFourth:FC<{ height: string }> = (props) => {
 return (
   <Border borderStyle={{height:props.height}}></Border>
 );
};

export default RightFourth;
