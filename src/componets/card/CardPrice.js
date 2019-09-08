import React from "react";

function CardPrice(props) {
  return (
    <div class="plan-price">
      <span class="plan-price-amount">
        <span class="plan-price-currency">R$</span>
        {props.price}
      </span>
    </div>
  );
}
export default CardPrice;
