import { CSSProperties, FC } from 'react';
import Border from '@/components/border';
import RollTable from '@/components/rollTable';

const borderStyle: CSSProperties = {};

const innerStyle: CSSProperties = {};

const title = '开机和累计工作时间';

const LeftSecond: FC<{ height: string }> = (props) => {
  return (
    <Border
      borderStyle={{ ...borderStyle, height: props.height }}
      innerStyle={innerStyle}
      title={title}
    >
      <RollTable></RollTable>
    </Border>
  );
};

export default LeftSecond;
