import { FC, useRef } from 'react';
import './index.less';
import { Column, RollTableSingle } from '@/components/rollTable/index';

const RollTableBody: FC<{
  columns: Column[];
  tableData: RollTableSingle[];
}> = ({ columns, tableData }) => {
  const ref = useRef(null);
  function createLine(data: RollTableSingle) {
    return columns.map(({ key, width }, idx) => (
      <span className={'column'} style={{ flex: width }} key={key + idx}>
        {data[key] ?? ''}

      </span>
    ));
  }
  function createTable() {
    return tableData.map((item, idx) => {
      return (
        <div className={'rollTableLine bodyLine'} key={idx}>
          {createLine(item)}
          {
            <span
              className={'sign icon iconfont icon-dot'}
              key={'dot' + idx}
            ></span>
          }
        </div>
      );
    });
  }
  setTimeout(() => {
    console.log('ref', ref);
  }, 3000);
  return (
    <div className={'rollTableBody'}>
      <div ref={ref}>{createTable()}</div>
    </div>
  );
};

export default RollTableBody;
