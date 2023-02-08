import React from "react";
import "./Title.css";

const Title = () => {
  return (
    <div className="container">
      <div className="title-container">
        <h1>BIENVENIDO AL SISTEMA PUNTO DE VENTA</h1>
        <h2>____________________________________________________________________</h2>
        <div className="img-logo">
            <img
              src={require("../../../../img/logo.png")}
              alt="Logo"
              width="100"
              height="100"
            />
        </div>
      </div>
    </div>
  );
};

export default Title;
