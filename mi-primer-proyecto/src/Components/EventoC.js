import React from "react";
import "../styles/Evento.css";
function Evento(image,title,dateLiteral,placeLiteral,description){
    return(
      <div className="card-container">

      <img className="card-image"
          src={require(`../images/${props.image}.jpg`)}
          alt="Foto del evento" />


      <div className="card-content">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-date">{props.dateLiteral}</p>
          <p className="card-place">{props.placeLiteral}</p>
          <p className="card-description">{props.description}</p>
          {description.map((line, index) => (<p className="card.description">(line)</p>))}
      </div>
    </div>
    );
}