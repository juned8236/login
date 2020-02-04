import "./Dashboard.css";
import React from "react";
import TableComponent from '../tableComponent/index';

function template() {
  const {data}=this.props;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {this.state.headers}

      <TableComponent   headers={this.state.headers} data={this.state.data} keys={this.state.keys} />
    



    </div>
  );
};

export default template;
