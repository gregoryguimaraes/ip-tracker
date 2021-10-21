import React, { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState({
    ip: "",
    location: { country: "", region: "", city: "", lat: "", lng: "" },
    isp: "",
  });
  return (
    <GlobalContext.Provider value={{ dados, setDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
