import { FC } from "react";
import Border from "@/components/border";

const RightSecond:FC<{ height: string }> = (props) => {
 return (
   <Border borderStyle={{height:props.height}}></Border>
 );
};

export default RightSecond;
