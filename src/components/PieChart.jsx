import React, { useEffect, useState } from "react";
import { Pie } from "@ant-design/charts";

const getConfig = (data, confirmed) => {
  return {
    data: data,
    height: 100,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.85,
    color: ["blue", "grey", "green"],
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    label: false,
    statistic: {
      title: false,
      content: {
        style: {
          fontSize: "14px",
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        formatter: function formatter() {
          return `<span><strong>${confirmed}</strong><br><span class="color__grey">Confirmed</span></span>`;
        },
      },
    },
  };
};

const chartFields = ["active", "deaths", "recovered"];

const PieChart = ({ stateData }) => {
  const [data, setData] = useState();
  const [config, setConfig] = useState();

  useEffect(() => {
    stateData &&
      setData(
        chartFields.map((type) => {
          const tempObj = {};
          tempObj.type = type;
          tempObj.value = Number(stateData[type]);
          return tempObj;
        })
      );
  }, [stateData]);

  useEffect(() => {
    data && setConfig(getConfig(data, stateData.confirmed));
  }, [data]);

  return config ? <Pie {...config} /> : <></>;
};

export default PieChart;
