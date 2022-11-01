import { CSSProperties, FC } from 'react';
import Border from '@/components/border';

const borderStyle: CSSProperties = {};
const title = '数控设备运行状态'
const LeftThird: FC<{ height: string }> = (props) => {
  return (
    <Border borderStyle={{ ...borderStyle, height: props.height }} title={title}></Border>
  );
};

export default LeftThird;
