import { FC } from 'react';
import './index.less';
import { Column, RollTableSingle } from '@/components/rollTable/index';

const RollTableBody: FC<{
  columns: Column[];
  tableData: RollTableSingle[];
}> = ({ columns, tableData }) => {
  function createLine(data: RollTableSingle) {
    return columns.map(({ key, width }) => (
      <span className={'column'} style={{ flex: width }} key={key}>
        {data[key] ?? ''}
      </span>
    ));
  }
  function createTable() {
    return tableData.map((item, idx) => {
      return (
        <div className={'rollTableLine bodyLine'} key={idx}>
          {createLine(item)}
        </div>
      );
    });
  }
  return (
    <div className={'rollTableBody'}>
      <div>{createTable()}</div>
    </div>
  );
};

export default RollTableBody;
