import React from "react";

export default function Phonetic(props) {
  let audio = props.phonetic.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }
  return (
    <div className="Phonetic">
      {" [ "}
      {props.phonetic.text} {" ]"}
      <i class="fas fa-volume-up" onClick={playAudio}></i>
    </div>
  );
}
