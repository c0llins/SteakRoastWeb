import React from "react";

function CardContent() {
  return (
    <div class="card-content">
      <h4 class="title is-4 has-text-centered">COSTELA DE PIETO</h4>
      <div class="content">
        <div class="tags are-medium">
          <span class="tag">
            Alface<button class="delete is-small"></button>
          </span>
          <span class="tag">
            Calabresa <button class="delete is-small"></button>{" "}
          </span>
          <span class="tag">
            Cheddar <button class="delete is-small"></button>
          </span>
          <span class="tag">
            Picanha 120g <button class="delete is-small"></button>
          </span>
          <span class="tag">
            Tomate<button class="delete is-small"></button>
          </span>
        </div>
        <div class="plan-price">
          <span class="plan-price-amount">
            <span class="plan-price-currency">R$</span>23,99
          </span>
        </div>
        <a
          class="button is-medium is-fullwidth is-success"
          href="https://api.whatsapp.com/send?phone=5547988909401&text=*NOME%20LANCHE*%0D%0DCom%20%20_%20-%20Alface%20%2C%20Calabresa%2C%20Cheddar%2C%20Hamb%C3%BArguer%2C%20Tomate%20_"
        >
          <i class="fab fa-whatsapp" style={{ marginRight: "5px" }}></i>Pedir
        </a>
      </div>
    </div>
  );
}
export default CardContent;
