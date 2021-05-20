import React from "react";
import { Table } from "antd";
const StatesTable = ({ statewise }) => {
  const Columns = [
    {
      title: "STATE/UT",
      dataIndex: "state"
    },
    {
      title: "CONFIRMED",
      dataIndex: "confirmed",
    },
    {
      title: "ACTIVE",
      dataIndex: "active",
    },
    {
      title: "RECOVERED",
      dataIndex: "recovered",
    },
    {
      title: "DECEASED",
      dataIndex: "deaths",
    },
  ];
  return (
    <div>
      <Table
        className="states__table container__white"
        columns={Columns}
        dataSource={statewise.filter((el) => el.statecode !== "TT")}
        pagination={true}
        bordered={false}
      />
    </div>
  );
};

export default StatesTable;
