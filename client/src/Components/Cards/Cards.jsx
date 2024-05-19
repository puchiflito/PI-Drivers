import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDrivers, getAllTeams } from "../../Redux/actions/action";
import Card from "./Card";
import style from "./css/cards.module.css";

const Cards = () => {
  const getDriver = useSelector((state) => state.driver);

  const dispatch = useDispatch();
  console.log("drivers: ", getDriver);
  useEffect(() => {
    dispatch(getAllDrivers());
  }, [dispatch]);
  return (
    <div className={style.cards}>
      Cards
      {getDriver.map((driver, index) => (
        <Card
          key={index}
          id={driver.id}
          name={driver.name}
          image={driver.image.url}
          teams={driver.teams}
          Teams={driver.Teams}
        />
      ))}
    </div>
  );
};

export default Cards;
