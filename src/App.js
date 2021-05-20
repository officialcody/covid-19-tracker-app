import React, { useState, useEffect } from "react";
import { Row, Spin, Col, Image, Typography } from "antd";
import axios from "axios";
import IndiaMap from "./components/IndiaMap";
import icon from "./images/india-circular.png"
import PieChart from "./components/PieChart";
import StatesTable from "./components/StatesTable";
import "./App.css";
import LineChart from "./components/LineChart";
import Boxes from "./components/Boxes";

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [currentState, setCurrentState] = useState("TT")

  useEffect(() => {
    (async () => {
      const data_response = await axios.get("https://api.covid19india.org/data.json");
      const states_daily_response = await axios.get("https://api.covid19india.org/states_daily.json");
      setFetchedData({ data: data_response.data, states_daily: states_daily_response.data.states_daily.reverse().slice(0, 50) });
    })();
  }, []);

  return (
    <div className="App">
      {fetchedData ? (
        <Row justify="space-around">
          <Col ><Image className="icon__outer" src={icon} alt="" width="50%" preview={false} /></Col>
          <Col lg={11} md={22}>
            <div className="flex__col h__100">
              <Typography.Text className="heading">INDIA COVID-19 Tracker</Typography.Text>
            </div>
            <Row justify="space-between container__white" align="middle"><Col span={11}><PieChart stateData={fetchedData.data.statewise.filter(el => el.statecode === currentState)[0]} /></Col>
              <Col span={9}><LineChart states_daily={fetchedData.states_daily} currentState={currentState.toLowerCase()} /></Col>
            </Row>
            <StatesTable statewise={fetchedData.data.statewise} />
          </Col>
          <Col lg={11} md={22}>
            <div className="flex__col h__100">
              <Typography.Text className="heading">INDIA MAP</Typography.Text>
            </div>
            <div className="container__white">
              <Boxes stateData={fetchedData.data.statewise.filter(el => el.statecode === currentState)[0]} />
              <IndiaMap statewise={fetchedData.data.statewise} setCurrentState={setCurrentState} />
            </div></Col>
        </Row>
      ) : (
        <Spin />
      )}
    </div>
  );
}

export default App;
