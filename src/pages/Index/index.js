import React, { useState, useEffect } from "react";
import Card from "../../componets/card/Card";
import Navbar from "../../componets/Navbar";
import api from "../../services/api";

export default function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    api.get("/view").then(result => setData(result.data));
  }, []);

  return (
    <div className="home">
      <Navbar></Navbar>
      <section className="section" style={{ marginTop: "10px" }}>
        <div className="container">
          <div
            className="columns"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {data.map(item => (
              <div className="column is-one-quarter">
                <Card
                  name={item.name}
                  price={item.price}
                  tags={item.ingredients}
                  whatsLink={
                    "https://api.whatsapp.com/send?phone=5547988909401&text=*NOME%20LANCHE*%0D%0DCom%20%20_%20-%20Alface%20%2C%20Calabresa%2C%20Cheddar%2C%20Hambúrguer%2C%20Tomate%20_"
                  }
                  imgLink={item.img}
                  imgAlt={item.name}
                ></Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
