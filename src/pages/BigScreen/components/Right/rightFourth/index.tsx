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

  function createChart() {
    let options: ECOption;
    if (chart) {
      options = {
        xAxis: { data: xData },
        series: [{ data: data[0] }, { data: data[1] }],
      };
    } else {
      options = {
        title: {
          show: false,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: { show: false },
        grid: {
          left: '0',
          right: '6%',
          bottom: '3%',
          top: '5%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            color: '#4c9bfd', //文本颜色
            fontSize: 8,
          },
          boundaryGap: [0, 0.01],
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)',
            },
          },
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            color: '#4c9bfd', //文本颜色
            fontSize: 8,
            interval: 0,
            // align:"left",
            width: 50,
            overflow: 'truncate',
            interval: 0,
          },
          data: yLabel,
        },
        series: [
          {
            type: 'bar',
            itemStyle: {
              // 提供的工具函数生成渐变颜色
              // (x1,y2) 点到点 (x2,y2) 之间进行渐变
              color: new echarts.graphic.LinearGradient(1, 1, 0, 0, [
                { offset: 0, color: '#00fffb' }, // 0 起始颜色
                { offset: 1, color: '#0061ce' }, // 1 结束颜色
              ]),
            },
            // 柱子宽度
            barWidth: '60%',
            data: barData,
            label: {
              show: true,
              position: 'right',
              color: '#00fffb',
            },
          },
        ],
      };
      chart = echarts.init(chartRef.current!);
    }

    chart && options && chart.setOption(options);
  }
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
