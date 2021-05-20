import React from "react";
import { VectorMap } from "react-jvectormap";

const getalldata = (array) => {
  var countryData = [];
  array.forEach((obj) => {
    countryData[`IN-${obj.statecode}`] = obj.confirmed;
  });
  return countryData;
};

const IndiaMap = ({ statewise, setCurrentState }) => {
  return (
    <div>
      <VectorMap
        map={"in_mill"}
        backgroundColor="transparent"
        focusOn={{
          x: 0.5,
          y: 0.5,
          scale: 0,
          animate: false,
        }}
        zoomButtons={false}
        zoomOnScroll={true}
        containerStyle={{
          width: "80%",
          height: "450px",
          margin: "auto"
        }}
        code
        onRegionTipShow={(_, el, code) => {
          setCurrentState(code.substring(3));
          return false;
        }
        }
        onRegionOut={() => setCurrentState("TT")}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
          selected: {
            fill: "#2938bc",
          },
        }}
        regionsSelectable={false}
        series={{
          regions: [
            {
              values: getalldata(statewise),
              scale: ["#ff0000", "#ff0000", "#ffff00"],
              normalizeFunction: "polynomial",
            },
          ],
        }}
      />
    </div>
  );
};
export default IndiaMap;
