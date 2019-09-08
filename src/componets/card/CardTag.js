import React from "react";

function CardTag(props) {
  return (
    <span class="tag">
      {props.name}
      <button class="delete is-small"></button>
    </span>
  );
}
export default CardTag;
