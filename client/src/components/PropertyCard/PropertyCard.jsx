import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flexColStart r-card bg-light shadow"
      onClick={() => navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id} />
      <img src={card.image} alt="home" />
      <span className="primaryText r-price">
        <span style={{ color: "black" }}>Rs </span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText property-title-black">
        {truncate(card.title, { length: 15 })}
      </span>
      <span className="text-dark">
        {truncate(card.description, { length: 80 })}
      </span>
    </div>
  );
};

export default PropertyCard;
