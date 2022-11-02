import { CSSProperties, FC, useState } from "react";
import Border from '@/components/border';
import RollTable, { Column, RollTableSingle } from "@/components/rollTable";

const borderStyle: CSSProperties = {};
const title = '数控设备运行状态';

const columns: Column[] = [
  { name: '序号', width: 20, key: 'order' },
  { name: '人员', width: 30, key: 'person' },
  { name: '设备', width: 30, key: 'equip' },
  { name: '故障代码', width: 40, key: 'errorCode' },
  { name: '故障开始', width: 30, key: 'errorStartTime' },
  { name: '故障持续', width: 30, key: 'errorTime' },
];

const table: RollTableSingle[] = [
  {
    person: "方为名",
    equip: "数控角钢高速钻孔生产线-三菱1",
    errorCode: "无",
    errorStartTime: "无",
    errorTime: "0s",
    order: "51",
    lineState:0,
  },
  {
    person: "张国富",
    equip: "数控角钢高速钻孔生产线-三菱2",
    errorCode: "无",
    errorStartTime: "无",
    errorTime: "0s",
    order: "52",
    lineState:3,
  },
  {
    person: "李伟",
    equip: "数控角钢高速钻孔生产线-三菱3",
    errorCode: "FAULT-0018",
    errorStartTime: "2022/7/16",
    errorTime: "5s",
    order: "53",
    lineState:0,
  },
  {
    person: "张强",
    equip: "高速钻-台达",
    errorCode: "1026-jt-102",
    errorStartTime: "2022/7/14",
    errorTime: "10s",
    order: "54",
    lineState:2,
  },
];

const LeftThird: FC<{ height: string }> = (props) => {
  const [tableData, setTableData] = useState<RollTableSingle[]>(
    table
  );
  return (
    <Border
      borderStyle={{ ...borderStyle, height: props.height }}
      title={title}
    >
      <RollTable columns={columns} tableData={tableData}></RollTable>
    </Border>
  );
};

export default LeftThird;
