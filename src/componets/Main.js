import React from "react";
import "../css/App.css";
import Navbar from "./Navbar";
import Card from "./card/Card";

function Main() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <section class="section" style={{ marginTop: "10px" }}>
        <div class="container">
          <div class="columns">
            <div class="column">
              <Card></Card>
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
          <div class="columns">
            <div class="column">
              <Card></Card>
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
          <div class="columns">
            <div class="column">
              <Card></Card>
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

export default Main;
