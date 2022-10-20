import {CSSProperties, FC} from 'react'
import styles from './index.less';
import Border from "@/pages/BigScreen/components/border";
import Title from "@/pages/BigScreen/components/title";
import {Col, Divider, Row} from 'antd';
import Layout from './components/layout';

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
