import { FC } from "react";
import Border from "@/components/border";

const RightThird:FC<{ height: string }> = (props) => {
 return (
   <Border borderStyle={{height:props.height}}></Border>
 );
};

export default RightThird;
