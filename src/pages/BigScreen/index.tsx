import {CSSProperties, FC} from 'react'
import styles from './index.less';
import Title from "@/pages/BigScreen/components/title";
import Layout from './layout';


const title = '角钢车间生产智能看板'

const BigScreen: FC = (props) => {
  return (
    <div className={styles.container}>
      <Title name={title}></Title>
      <div className={styles.main}>
        <Layout></Layout>
      </div>
    </div>
  );
}
export default BigScreen
