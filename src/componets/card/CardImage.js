import React from "react";

function CardImage(props) {
  return (
    <div class="card-image">
      <figure class="image is-4by3">
        <img src={props.imgLink} alt={props.imgAlt} />
      </figure>
    </div>
  );
}
export default CardImage;
