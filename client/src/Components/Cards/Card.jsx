import React from "react";
import style from "./css/card.module.css";

const Card = (props) => {
  const diferentTeams = props.teams
    ? props.teams
    : props.Teams
    ? props.Teams.name
    : "Info no obtenida";
  return (
    <div className={style.card}>
      <div>
        <img
          className={style.image}
          src={props.image}
          alt="imagen del piloto"
        />
      </div>
      <div>
        {props.name.forename ? (
          <h3>Nombre: {props.name.forename}</h3>
        ) : (
          <h3>Nombre: {props.name}</h3>
        )}
      </div>
      <div></div>
      <div>
        <h3>Teams: {diferentTeams}</h3>
      </div>
    </div>
  );
};

export default Card;
