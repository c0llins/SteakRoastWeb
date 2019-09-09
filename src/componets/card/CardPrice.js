import React from "react";

function CardPrice(props) {
  return (
    <div className="plan-price">
      <span class="plan-price-amount">
        <span className="plan-price-currency">R$</span>
        {props.price}
      </span>
    </div>
  );
}
export default CardPrice;
