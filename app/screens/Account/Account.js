import React, { useState, useEffect } from "react";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import * as firebase from "firebase";
import Loading from "../../components/Loading";
const Account = () => {
  //login state
  const [login, setLogin] = useState(null);
  //in case login change, it will change
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  //el null solo durará muy poco en se valida user de la autenticacion o no ... y cambiara a false o true
  if (login === null) return <Loading isVisible={true} text="Cargando..." />;
  return login ? <UserLogged /> : <UserGuest />;
};

export default Account;
