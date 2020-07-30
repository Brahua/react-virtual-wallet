import React from "react";
import "./../../styles/Feeds.scss";

const FeedItem = ({ description, value, imgSrc }) => {
  return (
    <div className="feed__item p-2 mt-3">
      <small>{description}: </small>
      <div className="d-flex justify-content-between align-items-center">
        <img src={imgSrc} alt={description} width="40px" className="mr-2" />
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default function Feed({ available, date }) {
  return (
    <div className="feed">
      <FeedItem
        description="Saldo disponible"
        value={`S/. ${available}`}
        imgSrc="/assets/img/dinero.svg"
      />

      {/* <FeedItem
        description="Fecha"
        value={`${date.toLocaleString()}`}
        imgSrc="/assets/img/calendario.svg"
      /> */}
    </div>
  );
}
