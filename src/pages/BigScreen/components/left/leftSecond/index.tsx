import { CSSProperties, FC } from 'react';
import Border from '@/components/border';
import RollTable, { Column, RollTableSingle } from '@/components/rollTable';

const borderStyle: CSSProperties = {};

const innerStyle: CSSProperties = {};

const title = '开机和累计工作时间';

const columns: Column[] = [
  { name: '人员', width: 20, key: 'person' },
  { name: '班组', width: 20, key: 'team' },
  { name: '机床', width: 30, key: 'equip' },
  { name: '开机', width: 40, key: 'startTime' },
  { name: '自动时间', width: 30, key: 'autoTime' },
  { name: '手动时间', width: 30, key: 'manualTime' },
  { name: '上电时间', width: 30, key: 'powerTime' },
];

const tableData: RollTableSingle[] = [
  {
    person: '方为名',
    team: '角钢小组',
    equip: '数控角钢高速钻孔生产线-三菱1',
    startTime: '14h53m',
    autoTime: '5h36m',
    manualTime: '5h26m',
    powerTime: '14h59m',
  },
  {
    person: '方为名',
    team: '角钢小组',
    equip: '数控角钢高速钻孔生产线-三菱1',
    startTime: '14h53m',
    autoTime: '5h36m',
    manualTime: '5h26m',
    powerTime: '14h59m',
  },
  {
    person: '方为名',
    team: '角钢小组',
    equip: '数控角钢高速钻孔生产线-三菱1',
    startTime: '14h53m',
    autoTime: '5h36m',
    manualTime: '5h26m',
    powerTime: '14h59m',
  },
  {
    person: '方为名',
    team: '角钢小组',
    equip: '数控角钢高速钻孔生产线-三菱1',
    startTime: '14h53m',
    autoTime: '5h36m',
    manualTime: '5h26m',
    powerTime: '14h59m',
  },
  {
    person: '张国富',
    team: '角钢小组',
    equip: '数控角钢高速钻孔生产线-三菱2',
    startTime: '14h51m',
    autoTime: '5h37m',
    manualTime: '3h27m',
    powerTime: '14h58m',
  },
  {
    person: '李伟',
    team: '角钢小组',
    equip: '数控角钢高速钻孔生产线-三菱3',
    startTime: '14h40m',
    autoTime: '8h38m',
    manualTime: '1h28m',
    powerTime: '14h49m',
  },
  {
    person: '张强',
    team: '角钢小组',
    equip: '高速钻-台达',
    startTime: '15h0m',
    autoTime: '6h39m',
    manualTime: '2h29m',
    powerTime: '15h10m',
  },
  {
    person: '史方泽',
    team: '角钢小组',
    equip: '高速钻-台达',
    startTime: '14h23m',
    autoTime: '7h42m',
    manualTime: '3h29m',
    powerTime: '15h10m',
  },
  {
    person: '曹嘉琦',
    team: '角钢小组',
    equip: '高速钻-台达',
    startTime: '13h0m',
    autoTime: '7h39m',
    manualTime: '5h29m',
    powerTime: '14h10m',
  },
  {
    person: '王森',
    team: '角钢小组',
    equip: '高速钻-台达',
    startTime: '14h22m',
    autoTime: '8h12m',
    manualTime: '3h14m',
    powerTime: '14h30m',
  },
  {
    person: '毛长伟',
    team: '角钢小组',
    equip: '高速钻-台达',
    startTime: '12h13m',
    autoTime: '8h43m',
    manualTime: '3h42m',
    powerTime: '13h06m',
  },
  {
    person: '李成祥',
    team: '角钢小组',
    equip: '高速钻-台达',
    startTime: '11h16m',
    autoTime: '6h12m',
    manualTime: '3h29m',
    powerTime: '12h12m',
  },
];

const LeftSecond: FC<{ height: string }> = (props) => {
  return (
    <Border
      borderStyle={{ ...borderStyle, height: props.height }}
      innerStyle={innerStyle}
      title={title}
    >
      <RollTable columns={columns} tableData={tableData}></RollTable>
    </Border>
  );
};

export default LeftSecond;
