import React from "react";
import { Rnd } from "react-rnd";
import echarts from "echarts";
import _ from "lodash";
import ReactEcharts from "echarts-for-react";
import { LineOption, PieOption, BarOption } from "../charts";
import { Button, Radio, Icon } from "antd";
import "./rrp.scss";
class Rrp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      charts: [],
      isD: false
    };
  }
  componentDidMount() {}
  // shouldComponentUpdate() {
  //   if (this.state.isD) {
  //     return false;
  //   }
  //   return true;
  // }
  renderCharts = () => {
    return _.map(this.state.charts, (chart, index) => {
      let option;
      if (chart.type === "bar") {
        option = BarOption;
      } else if (chart.type === "line") {
        option = LineOption;
      } else if (chart.type === "pie") {
        option = PieOption;
      }
      let component = <ReactEcharts option={option} key={index} notMerge={true} lazyUpdate={true} style={{ width: '"100%"', height: "100%" }} />;
      return (
        <Rnd
          key={index}
          bounds={"body"}
          style={{ border: "1px solid red", background: "#fff", cursor: "pointer" }}
          dragGrid={[1, 1]}
          className="rnd-chart"
          position={{ x: chart.x, y: chart.y }}
          size={{ width: chart.width, height: chart.height }}
          onDragStop={(e, d) => {
            this.setState({
              charts: this.state.charts.map((item, ii) => {
                if (index == ii) {
                  item.x = d.x;
                  item.y = d.y;
                  return item;
                }
                return item;
              })
            });
          }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.setState({
              charts: this.state.charts.map((item, ii) => {
                if (index == ii) {
                  item.width = ref.style.width;
                  item.height = ref.style.height;
                  return item;
                }
                return item;
              })
            });
          }}
          // default={{
          //   width: 320,
          //   height: 200
          // }}
        >
          <Icon type="close-circle" className="icon-del" onClick={this.delChart.bind(this, index)} />
          {component}
        </Rnd>
      );
    });
  };
  rdoClick = e => {
    this.setState({
      charts: this.state.charts.concat({
        type: e.target.value,
        x: 0 + this.state.charts.length * 50,
        y: 50 + this.state.charts.length * 50,
        width: 320,
        height: 200
      })
    });
  };
  delChart = _index => {
    this.setState({
      charts: this.state.charts.filter((item, index) => index != _index)
    });
  };
  render() {
    return (
      <div className="rnd-container">
        <div className="toolbar">
          <Radio.Group onChange={this.rdoClick}>
            <Radio.Button value="bar">添加柱状图</Radio.Button>
            <Radio.Button value="line">添加拆线图</Radio.Button>
            <Radio.Button value="pie">添加饼图</Radio.Button>
          </Radio.Group>
        </div>
        {this.renderCharts()}
        {/* <Rnd
          style={{ border: "1px solid red", background: "green", cursor: "pointer" }}
          dragGrid={[50, 50]}
          default={{
            x: 0,
            y: 0,
            width: 320,
            height: 200
          }}
        >
          <div ref="bar" style={{ width: "100%", height: "100%" }}></div>
        </Rnd>
        <Rnd
          style={{ border: "1px solid red", background: "yellow", cursor: "pointer" }}
          dragGrid={[50, 50]}
          default={{
            x: 400,
            y: 0,
            width: 320,
            height: 200
          }}
        >
          <div ref="line" style={{ width: "100%", height: "100%" }}></div>
        </Rnd>
        <Rnd
          style={{ border: "1px solid red", background: "#8A7FF4", cursor: "pointer" }}
          dragGrid={[50, 50]}
          default={{
            x: 800,
            y: 0,
            width: 320,
            height: 200
          }}
        >
          <div ref="pie" style={{ width: "100%", height: "100%" }}></div>
        </Rnd> */}
      </div>
    );
  }
}

export default Rrp;
