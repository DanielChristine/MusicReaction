import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Table } from "semantic-ui-react";


data = axios({
  method: "get",
  url: "http://devcodecampmusiclibrary.com/",
  data: {},
});

export default data;