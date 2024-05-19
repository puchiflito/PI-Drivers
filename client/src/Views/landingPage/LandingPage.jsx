import React from "react";
import style from "./landingPage.module.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className={style.body}>
      <h1>Bienvenidos a la App de la Formula 1</h1>
      <Link to="/home">
        <button>Entrar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
