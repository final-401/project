import { createContext, useContext, useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
const baseUrl = "https://pets-api-v1.herokuapp.com";
const tokenUrl = baseUrl + "/api/v1/token/";
import Router from 'next/router'
  

const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider(props) {

  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  });

  async function login(email, password) {
    // const response = await axios.post(tokenUrl, { email, password });
    try{
    const responseData = await axios.post(tokenUrl, { email, password })
    // .then((response) => { console.log("response is" + response) })
    // .catch((error) => { alert('please check the email and password')});

    const decodedAccess = jwt.decode(responseData.data.access);
    localStorage.setItem("access", responseData.data.access);
    localStorage.setItem("refresh", responseData.data.refresh);
    console.log(decodedAccess);
    const newState = {
      tokens: responseData.data,
      user: {
        username: decodedAccess.username,
        email: decodedAccess.email,
        id: decodedAccess.user_id,
        role: decodedAccess.role,
        firstname: decodedAccess.firstname,
        lastname: decodedAccess.lastname,
      },
      login,
      logout,
    
    };

    setState(({ prevState }) => ({ ...prevState, ...newState }));
    Router.push('/')

  }
  catch(error){
    alert('please check the email and password')
    console.log(error)
  }
  }

  function logout() {
    console.log("hiii");
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
    localStorage.removeItem("refresh");
    localStorage.removeItem("access");
  }

  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );

}
