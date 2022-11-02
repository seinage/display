import { FC, useEffect, useRef } from 'react';
import './index.less';
import { Column, RollTableSingle } from '@/components/rollTable/index';

const RollTableBody: FC<{
  columns: Column[];
  tableData: RollTableSingle[];
}> = ({ columns, tableData }) => {
  const bodyRef = useRef<null | HTMLDivElement>(null);
  const contentRef = useRef<null | HTMLDivElement>(null);
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
  // useEffect(() => {
  //   scrollTable();
  // });
  setTimeout(()=>{scrollTable()},3000)
  function scrollTable() {
    const bodyHeight = bodyRef.current?.clientHeight ?? 0;
    const contentHeight = contentRef.current?.clientHeight ?? 0;
    if (contentHeight > bodyHeight && tableData.length > 0) {
      console.log('roll');
    }
  }
  return (
    <div ref={bodyRef} className={'rollTableBody'}>
      <div ref={contentRef}>{createTable()}</div>
    </div>
  );
};

export default RollTableBody;
