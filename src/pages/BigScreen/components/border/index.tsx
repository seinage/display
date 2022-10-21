import {Component, FC} from 'react';
import styles from './index.less';

const Border:FC<{}> =(props)=>{
  return (
    <div className={styles.border}>
      {props.children}
    </div>
  );
}

export default Border
