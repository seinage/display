import { FC, useEffect, useRef, useState } from 'react';
import Border from '@/components/border';
import { echarts } from '@/plugins';
import { ECOption } from '@/plugins/echarts';

const title = '近一个月生产数量排名';
let chart: echarts.ECharts;
const RightFourth: FC<{ height: string }> = (props) => {
  const chartRef = useRef<null | HTMLDivElement>(null);

  const [data, setData] = useState([
    { name: '数控角钢高速钻孔生产线-三菱1', count: 7415 },
    { name: '数控角钢高速钻孔生产线-三菱2', count: 6960 },
    { name: '数控角钢高速钻孔生产线-三菱3', count: 7263 },
    { name: '高速钻-台达', count: 7278 },
  ]);

  useEffect(() => {
    // createChart();
  }, [data]);

  return (
    <Border borderStyle={{ height: props.height }} title={title}>
      <div
        ref={chartRef}
        style={{ width: '100%', height: '100%', letterSpacing: 0 }}
      ></div>
    </Border>
  );
};

export default RightFourth;
