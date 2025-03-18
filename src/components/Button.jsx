// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const primary = css`
background-color: #074EE8;
width: 200px;


`
const secondary = css`
background-color: #07A4E8;
width: 200px;
`


function Button({type}) {
return (
    <button css={type === "primary" ? primary : secondary }>{type === "primary" ? "Primary Button" : "Secondary Button" }</button>
)
}


export default Button;