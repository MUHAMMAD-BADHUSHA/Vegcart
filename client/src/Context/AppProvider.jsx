import App from "../App";
import { AppContext } from "./AppContext";
import React, { useState } from "react";

function AppProvider() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const data = { 

    isAdmin, setIsAdmin,
    isLogged, setIsLogged,
    name, setName ,
    email, setEmail,
    password, setPassword,
    price, setPrice,
    category, setCategory,
    file, setFile
  
  };
  return (
    <div>
      <AppContext.Provider value={data}>
        <App />
      </AppContext.Provider>
    </div>
  );
}

export default AppProvider;
