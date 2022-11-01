import { Component, CSSProperties, FC } from "react";
import styles from "./index.less";

/**
 * border通用组件
 * @param borderStyle border覆写样式，主要包含height
 * @param innerStyle inner覆写样式，主要包含height
 * @param children 内容
 * @returns {JSX.Element}
 * @constructor
 */
const Border: FC<{ borderStyle: CSSProperties, innerStyle?: CSSProperties }> =
  ({ borderStyle, innerStyle,children }): JSX.Element => {
    return (
      <div className={styles.border} style={borderStyle}>
        <div className={styles.inner} style={innerStyle}>
          {children}
        </div>
      </div>
    );
  };

export default Border;
