import "./Dashboard.css";
import React from "react";
import TableComponent from '../tableComponent/index';

function template() {

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <TableComponent   headers={this.state.headers} data={this.state.data} keys={this.state.keys} />
    



    </div>
  );
};

export default template;
