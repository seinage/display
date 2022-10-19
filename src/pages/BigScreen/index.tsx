import React, {Component} from 'react'
import styles from './index.less';
import Border from "@/pages/BigScreen/components/Border";


export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Border></Border>
      </div>
    </div>
  );
}
