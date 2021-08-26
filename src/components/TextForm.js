import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleCapitalizedCase = () =>{
      let newText = text.split(" ");
      for (let i=0; i<newText.length; i++){
        newText[i] = newText[i][0].toUpperCase() + newText[i].substr(1);
      }
      setText((newText.join(" ")));
      props.showAlert("Converted to Capitalized Case", "success");
  }

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mx-1 my-1">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            id="myBox"
            rows="8"
            className="form-control mx-2 my-1"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          />
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowerClick}
        >
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleCapitalizedCase}
        >
          Capitalized Case
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container mx-2 my-1"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words , {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
      </div>
    </>
  );
}
