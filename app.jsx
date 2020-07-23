import React from "react";
import ReactDOM from "react-dom";
import DrawGame from "./src/views/DrawGame.jsx";
import ProgressBar from "./src/views/ProgressBar.jsx";
import "./index.js";

ReactDOM.render(
  <div>
    <ProgressBar />
    <DrawGame>
      <span>
        點選 [<span style={{ color: "#a49ef0" }}>抽獎</span>]
        按鈕進行抽獎，抽到數字為2的倍數即中獎。
      </span>
      <span>
        點選 [<span style={{ color: "#ff88bb" }}>清除結果</span>]
        按鈕清除抽獎結果，第一次載入網頁與甫按下 [
        <span style={{ color: "#ff88bb" }}>清除結果</span>] 之後不能點選。
      </span>
      <span>
        亂數數字有做處理，本次與上一次相同時重新取值，確保連續兩次的結果不會相同。
      </span>
    </DrawGame>
  </div>,
  document.getElementById("root")
);
