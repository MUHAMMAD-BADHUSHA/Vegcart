import App from "../App";
import { AppContext } from "./AppContext";
import React, { useState } from "react";

function AppProvider() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const data = { isAdmin, setIsAdmin, isLogged, setIsLogged };
  return (
    <div>
      <AppContext.Provider value={ data }>
        <App />
      </AppContext.Provider>
    </div>
  );
}

export default AppProvider;
