import React from "react";
import { GlobalContext } from "../context/GlobalContext";
import "../styles/Results.css";
import Map from './Map'

function Results() {
  const global = React.useContext(GlobalContext);
  const { dados } = global;

  const { country, region, city, timezone } = dados.location;

  if (city != "") {
    return (
      <section className="results-section">
      <div className="results-content">
        <div id={"div-ip"}>
          <h6>IP ADRESS</h6>
          <div>{dados.ip}</div>
        </div>
        <div>
          <h6>LOCATION</h6>
          <div>{`${city}, ${region} - ${country}`}</div>
        </div>
        <div>
          <h6>TIMEZONE</h6>
          <div>{timezone}</div>
        </div>
        <div>
          <h6>ISP</h6>
          <div id={"end-div"}>{dados.isp}</div>
        </div>
      </div>

      <Map/>

      </section>
    );
  } else {
    return (
      <section  className="results-section">
      <div className="results-content">
        <div id={"div-ip"}>
          <h6>IP ADRESS</h6>
          <div>{dados.ip}</div>
        </div>
        <div>
          <h6>LOCATION</h6>
          <div>{`${city} ${region} ${country}`}</div>
        </div>
        <div>
          <h6>TIMEZONE</h6>
          <div>{timezone}</div>
        </div>
        <div>
          <h6>ISP</h6>
          <div id={"end-div"}>{dados.isp}</div>
        </div>
      </div>

      <Map/>

      </section>
    );
  }
}

export default Results;
