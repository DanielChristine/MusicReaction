import axios from 'axios';
import React from 'react';
import { AppState, StyleSheet, Text, View } from "react-native";
import './App.css';

function App() {
  return (
    <div className="App">


    </div>
  );
}


useEffect(() => {
  setAppState({ loading: true });
  const apiUrl = 'http://devcodecampmusiclibrary.com/';
  axios.get(apiUrl).then((repos) => {
    const allRepos = repos.data;
    setAppState({ loading: false, repos: allRepos });
  });
}, [setAppState]);

export default App;
