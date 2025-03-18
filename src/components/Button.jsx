// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const defaultStyle = css`
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 0px 16px;
  border-radius: 4px;
  width: 171.19px;
  height: 50px;
  margin: 10px;
`;
const primaryStyle = css`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 0px 16px;
  border-radius: 4px;
  width: 171.19px;
  height: 50px;
  margin: 10px;
`;
const secondaryStyle = css`
  background-color: #07a4e8;
  color: white;
  font-size: 16px;
  padding: 0px 16px;
  border-radius: 4px;
  width: 171.19px;
  height: 50px;
  margin: 10px;
`;
const errorStyle = css`
  background-color: #de5753;
  color: white;
  font-size: 16px;
  padding: 0px 16px;
  border-radius: 4px;
  width: 171.19px;
  height: 50px;
  margin: 10px;
`;
const successStyle = css`
  background-color: #4bb543;
  color: white;
  font-size: 16px;
  padding: 0px 16px;
  border-radius: 4px;
  width: 171.19px;
  height: 50px;
  margin: 10px;
`;

export function Button({ type }) {
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
