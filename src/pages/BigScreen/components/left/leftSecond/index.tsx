import { CSSProperties, FC } from "react";
import Border from "@/components/border";

const borderStyle: CSSProperties = { };

const title = '开机和累计工作时间'

const LeftSecond:FC<{ height: string }> = (props) => {
 return (
   <Border borderStyle={{ ...borderStyle, height: props.height }} title={title}>

   </Border>
 );
};

export default LeftSecond;
