/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const defaultStyle = css`
  color: black;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
`;
const successStyle = css`
  background-color: #d4edda;
`;
const infoStyle = css`
  background-color: #fff8c2;
`;
const warningStyle = css`
  background-color: #ffe8c2;
`;
const errorStyle = css`
  background-color: #f8d7da;
`;

function Alert({ text }) {
  return (
    <div
      css={
        text === "success"
          ? successStyle
          : text === "info"
          ? infoStyle
          : text === "warning"
          ? warningStyle
          : text === "error"
          ? errorStyle
          : defaultStyle
      }
    >
      {text === "success"
        ? "This is a success alert box"
        : text === "info"
        ? "This is an info alert box"
        : text === "warning"
        ? "This is a warning alert box"
        : text === "error"
        ? "This is an error alert box"
        : ""}
    </div>
  );
}
export default Alert;
