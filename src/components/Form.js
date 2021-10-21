import React from "react";
import "../styles/Form.css";
import { GlobalContext } from "../context/GlobalContext";

function Form() {
  const global = React.useContext(GlobalContext);
  const { setDados } = global;

  const [ip, setIp] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_wOJtQC1PREh78wcTt3RPfxOAvl3eR&ipAddress=${ip}`
    )
      .then((r) => r.json())
      .then((j) => {
        if (j.code === 422) {
          console.log("err");
          alert("invalido");
        } else {
          setDados({ ip: j.ip, location: j.location, isp: j.isp });
        }
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={ip}
        placeholder="Digite aqui o IP. Ex: '192.168.1.1'"
        onChange={(event) => setIp(event.target.value)}
      />
      <button>
        <b>&#5171;</b>
      </button>
    </form>
  );
}

export default Form;
