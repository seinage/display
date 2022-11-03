import { FC, useEffect, useRef, useState } from 'react';
import Border from '@/components/border';
import { dayJs, echarts } from '@/plugins';
import { ECOption } from '@/plugins/echarts';

const title = '近7日完成数量';

function createXData(count = 7) {
  const today = dayJs();
  const xData: string[] = [];
  for (let i = 0; i < count; i++) {
    xData.unshift(today.subtract(i, 'day').format('MM-DD'));
  }
  return xData;
}

let chart:echarts.ECharts
const RightSecond: FC<{ height: string }> = (props) => {
  const chartRef = useRef<null | HTMLDivElement>(null);

  const [data, setData] = useState([
    [1556, 2232, 1442, 1665, 1334, 1235, 2667],
    [1521, 2365, 1464, 1673, 1386, 1264, 2656],
  ]);

  useEffect(() => {
    createChart();
  }, [data]);


  function createChart() {
    let options: ECOption;
    const xData = createXData();
    if (chart) {
      options = {
        xAxis: { data: xData },
        series: [{ data: data[0] }, { data: data[1] }],
      };
    } else {
      options = {
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: xData,
          axisTick: {
            show: false, //去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd', //文本颜色
            fontSize: 8,
          },
          axisLine: {
            show: false, //去除轴线
          },
          boundaryGap: false, //去除轴内间距
        },
        yAxis: {
          // 数据作为刻度文字
          type: 'value',
          axisTick: {
            show: false, //去除刻度线
          },
          axisLabel: {
            color: '#4c9bfd', //文本颜色
            fontSize: 8,
          },
          axisLine: {
            show: false, //去除轴线
          },
          boundaryGap: false, //去除轴内间距
          splitLine: {
            lineStyle: {
              color: 'rgba(0, 240, 255, 0.3)',
            },
          },
        },
        legend: {
          textStyle: {
            color: '#4c9bfd', // 图例文字颜色
            fontSize: 8,
          },
          itemWidth: 10,
          itemHeight: 5,
          itemStyle: {
            borderWidth: 1,
          },
          lineStyle: {
            width: 1,
          },
          right: '3%', //距离右边10%
        },
        grid: {
          show: true, // 显示边框
          top: '20%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          borderColor: '#012f4a', // 边框颜色
          containLabel: true, // 包含刻度文字在内
        },
        series: [
          {
            name: '计划数量',
            // 数据
            data: data[0],
            // 图表类型
            type: 'line',
            // 圆滑连接
            smooth: false,
            itemStyle: {
              color: '#ed3f35', // 线颜色
              borderWidth: 1,
            },
            lineStyle: {
              width: 0.5,
            },
          },
          {
            name: '完成数量',
            // 数据
            data: data[1],
            // 图表类型
            type: 'line',
            // 圆滑连接
            smooth: false,
            itemStyle: {
              color: '#00f2f1', // 线颜色
              borderWidth: 1,
            },
            lineStyle: {
              width: 0.5,
            },
          },
        ],
      };
      chart =echarts.init(chartRef.current!)
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

export default RightSecond;
