import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import Error from "./Components/Error";
import Daily from "./Components/Daily";
import Tabs from "./Components/Tabs";
import Forecast from "./Components/Forecast";
// import Details from "./Components/Details/Details";
import Hours from "./Components/Details/Hours";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let base = "https://api.weatherapi.com/v1/forecast.json";
  let [city, setCity] = useState("london");
  let [results, setResults] = useState([]);
  let {data} = results;
  let {current, location, forecast} = data || []
  console.log(results)
  let [status, setStatus] = useState("");
  let appid = "784207c9a9404079864200450222703";
  let api = `${base}?key=${appid}&q=${city}&days=7&aqi=yes&alerts=no`;

  useEffect(()=>{
    axios.get(api).then(res=>{
      setStatus(true)
      setResults(res)
    })
    .catch(err=>{
      setStatus(false)
      console.log(err)
    })
  },[api])

  return (
    <div className="App">
        <h4 className="text-center">Weather App</h4>
        <SearchBar setCity={setCity} />

        <Router>
          <Tabs/>
          <Routes>
            <Route path="/" element ={status? <Daily current={current} location={location}/> : <Error/>}/>
            <Route path="/forecast" element ={status? <Forecast forecast={forecast?.forecastday} location={location}/> : <Error/>}/>
            <Route path="/forecast/:id" element={<Hours forecast={forecast?.forecastday} />}
          />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
