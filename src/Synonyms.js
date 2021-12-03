import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return (
            <span key={index} className="synonyms">
              {synonym}{" "}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
