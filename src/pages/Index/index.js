import React from "react";
import Card from "../../componets/card/Card";
import Navbar from "../../componets/Navbar";

export default function Index() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <section class="section" style={{ marginTop: "10px" }}>
        <div class="container">
          <div class="columns">
            <div class="column">
              <Card
                name={"Costelinha Bovina"}
                price={12.9}
                tags={["Carne", "Tomate"]}
                whatsLink={
                  "https://api.whatsapp.com/send?phone=5547988909401&text=*NOME%20LANCHE*%0D%0DCom%20%20_%20-%20Alface%20%2C%20Calabresa%2C%20Cheddar%2C%20Hambúrguer%2C%20Tomate%20_"
                }
                imgLink={
                  "https://yata.ostr.locaweb.com.br/9709eaea2a20f9ad958d6bb3d6c1ffeae7b02eaa1af5e7bfefc4df8de35d47f4"
                }
                imgAlt={"Costelinha Bovina"}
              ></Card>
            </div>
            <div class="column">
              <Card></Card>
            </div>
            <div class="column">
              <Card></Card>
            </div>
            <div class="column">
              <Card></Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
