import React, { FunctionComponent } from "react";
import fetchMetaData from "../account/fetch/fetchmetadata";

const Dashboard: FunctionComponent = () => {
   fetchMetaData(
      "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/"
   );

   return <span>dashboard</span>;
};

export default Dashboard;
