import { createContext, FC, useState } from "react";
import styles from './index.less';
import RollTableHeader from '@/components/rollTable/rollTableHeader';
import RollTableBody from '@/components/rollTable/rollTableBody';

export interface Column {
  name: string;
  width: number;
  key: string;
}
export interface RollTableSingle {
  [x: string]: string | number | boolean;
}


const RollTable: FC<{columns:Column[],tableData:RollTableSingle[]}> = (props) => {
  const [tableData,useTableData] = useState<RollTableSingle[]>([])

  return (
    <div className={styles.rollTable}>
      <RollTableHeader columns={props.columns}></RollTableHeader>
      <RollTableBody columns={props.columns} tableData={props.tableData}></RollTableBody>
    </div>
  );
};

export default RollTable;
