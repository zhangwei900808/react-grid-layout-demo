import React from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Responsive, WidthProvider } from "react-grid-layout";
import { MdPreviewer } from "react-code-previewer";
import echarts from "echarts";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

class Rglp extends React.PureComponent {
  componentDidMount() {
    const option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line"
        }
      ]
    };
    const option2 = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        x: "left",
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["50%", "70%"],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: "center"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "30",
                fontWeight: "bold"
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{ value: 335, name: "直接访问" }, { value: 310, name: "邮件营销" }, { value: 234, name: "联盟广告" }, { value: 135, name: "视频广告" }, { value: 1548, name: "搜索引擎" }]
        }
      ]
    };
    const option3 = {
      color: ["#3398DB"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          barWidth: "60%",
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    this.instance = echarts.init(this.refs.line);
    this.instance2 = echarts.init(this.refs.pie);
    this.instance3 = echarts.init(this.refs.bar);
    this.instance.setOption(option);
    this.instance2.setOption(option2);
    this.instance3.setOption(option3);
  }
  render() {
    var layout = [{ i: "a", x: 0, y: 0, w: 1, h: 2 }, { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }, { i: "c", x: 4, y: 0, w: 1, h: 2 }];
    return (
      <ResponsiveReactGridLayout className="layout" breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }} cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}>
        <div key="a" data-grid={{ x: 0, y: 0, w: 4, h: 2 }} style={{ border: "1px solid #ddd" }}>
          <div ref="bar" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div key="b" data-grid={{ x: 4, y: 0, w: 4, h: 2 }} style={{ border: "1px solid #ddd" }}>
          <div ref="line" style={{ width: "100%", height: "100%" }}></div>
        </div>
        <div key="c" data-grid={{ x: 8, y: 0, w: 4, h: 2 }} style={{ border: "1px solid #ddd" }}>
          <div ref="pie" style={{ width: "100%", height: "100%" }}></div>
        </div>
      </ResponsiveReactGridLayout>
    );
  }
}

export default Rglp;
