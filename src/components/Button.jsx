/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const defaultStyle = css`
  background-color: black;
  color: white;
  padding: 0px 16px;
  border-radius: 4px;
`;

const primaryStyle = css`
  background-color: #007bff;
`;

const secondaryStyle = css`
  background-color: #07a4e8;
`;

const errorStyle = css`
  background-color: #de5753;
`;

const successStyle = css`
  background-color: #4bb543;
`;

function Button({ type }) {
  return (
    <button
      css={
        type === "primary"
          ? primaryStyle
          : type === "secondary"
          ? secondaryStyle
          : type === "error"
          ? errorStyle
          : type === "success"
          ? successStyle
          : defaultStyle
      }
    >
      Button
    </button>
  );
}

export default Button;
