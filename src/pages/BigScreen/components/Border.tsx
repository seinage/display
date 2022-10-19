import {Component} from 'react';
import styles from '../index.less';

class Border extends Component<{}, {}> {
  render() {
    return (
      <div className={styles.border}>
        test
      </div>
    );
  }
}

export default Border
