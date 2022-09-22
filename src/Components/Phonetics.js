import React from "react";
import "./Phonetics.css";
// import Img from "../play-solid.svg";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
        Play
      </a>
      {props.phonetics.text}
    </div>
  );
}
