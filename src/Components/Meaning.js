import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <section className="meaning-box">
              <div>
                <strong>Definition: </strong>
                {definition.definition}
              </div>

              <div>
                <strong>Example: </strong>
                <em className="example">{definition.example}</em>
              </div>
              <Synonyms synonyms={definition.synonyms} />
            </section>
          </div>
        );
      })}
    </section>
  );
}
