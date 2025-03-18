// Start coding here

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Alert({ type }) {
  const err = css`
    width: 400px;
    height: 40px;
    background: pink;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    justify-content: center;  
  `;

  const war = css`
    width: 400px;
    height: 40px;
    background: orange;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    justify-content: center; 
  `;

  const info = css`
    width: 400px;
    height: 40px;
    background: hsl(50, 100%, 70%);
    border-radius: 5px;
    color: black;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    justify-content: center; 
  `;

  const success = css`
    width: 400px;
    height: 40px;
    background: green;
    border-radius: 5px;
    color: black;
    font-weight: bold;
    display: flex; 
    align-items: center; 
    justify-content: center;
  `;

  return (
    <>
    <div>
      <p
        css={
          type === "err"
            ? err
            : type === "war"
            ? war
            : type === "info"
            ? info
            : type === "success"
            ? success
            : ""
        }
      >
        {type === "err"
          ? "❌This is error alert box"
          : type === "war"
          ? "❗This is warning alert box"
          : type === "info"
          ? "❕This is info alert box"
          : type === "success"
          ? "✅This is sucess alert box"
          : ""
          }
      </p>
      </div>
    </>
  );
}

export default Alert;
