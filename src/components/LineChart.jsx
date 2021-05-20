import React, {useState, useEffect} from "react";
import moment from "moment";
import { Line } from "@ant-design/charts";

const get7DaysData = (states_daily) => {
  const validDates = [];
  for (let i = 0; i <= 7; i++) {
    validDates.push(moment(new Date()).subtract(i, "d").format("YYYY-MM-DD"));
  }
  const arr = states_daily.filter((el) => validDates.includes(el.dateymd));
  return arr;
};

const getConfig = (data) => {
    return {
        data: data,
        height: 100,
        xField: "date",
        yField: "value",
        seriesField: "category",
        label: false,
        point: {
          size: 1,
          shape: "diamond",
          style: {
            fill: "white",
            stroke: "#5B8FF9",
            lineWidth: 2,
          },
        },
        tooltip: { showMarkers: false },
        state: {
          active: {
            style: {
              shadowColor: "yellow",
              shadowBlur: 4,
              stroke: "transparent",
              fill: "red",
            },
          },
        },
        theme: {
          geometries: {
            point: {
              diamond: {
                active: {
                  style: {
                    shadowColor: "#FCEBB9",
                    shadowBlur: 2,
                    stroke: "#F6BD16",
                  },
                },
              },
            },
          },
        },
        color: ["red", "green", "grey"],
        xAxis: false,
        yAxis: false,
        legend: false,
        interactions: [{ type: "marker-active" }],
      };
}

const LineChart = ({ states_daily, currentState }) => {
  const [data, setData] = useState();
  const [config, setConfig] = useState()

  useEffect(() => {
    if(states_daily) {
        const weekData = get7DaysData(states_daily);
      setData(
        weekData.map((el) => {
            return {
              date: el.date,
              value: el[currentState],
              category: el.status,
            };
          })
      );
        }
  }, [states_daily, currentState]);
  
  useEffect(() => {
      data && setConfig(getConfig(data.reverse()))
    }, [data])

  return config ? <Line {...config} /> : <></>;
};

export default LineChart;
