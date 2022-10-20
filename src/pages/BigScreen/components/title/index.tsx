import {FC} from 'react';
import styles from './index.less';

const title = "角钢车间生产智能看板"

const Title: FC<{ name: string }> = (props) => {
  return (
    <div className={styles.title}>
      {props.name}
    </div>
  );
}

export default Title
