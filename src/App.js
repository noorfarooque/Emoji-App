import React, { useState } from "react";
import "./styles.css";

const emojiDictonary = {
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face"
};

var emojis = Object.keys(emojiDictonary);

export default function App() {
  var [emoji, setEmoji] = useState("");

  var [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const userInput = event.target.value;
    setEmoji(userInput);

    if (userInput in emojiDictonary) {
      setMeaning(emojiDictonary[userInput]);
    } else {
      setMeaning("Failure to recognise this emoji ");
    }
  }

  function emojiClickHandler(userInput) {
    setMeaning(emojiDictonary[userInput]);
  }

  return (
    <div className="App">
      <h1> Emoji Tanslator </h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"search your emoji"}
        style={{
          padding: "1em",
          minwidth: "80%"
        }}
      />
      <h2>{emoji}</h2>
      <h3>{meaning}</h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontsize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}
          {""}
        </span>
      ))}
    </div>
  );
}
