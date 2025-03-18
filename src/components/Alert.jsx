// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SentimentVeryDissatisfied, WarningAmberRounded, InfoOutlined, TaskAltRounded } from '@mui/icons-material';
import styled from '@emotion/styled';

const alertStyles = {
  error: css`
    background-color: #f8d7da;
    color: #636363;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 16px;
    border-radius: 10px;
    width: 342.38px;
    height: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
  `,
  warning: css`
    background-color:#FFD9BA;
    color: #636363;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 16px;
    border-radius: 10px;
    width: 342.38px;
    height: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
  `,
  info: css`
    background-color: #fff3cd;
    color: #636363;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 16px;
    border-radius: 10px;
    width: 342.38px;
    height: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
  `,
  success: css`
    background-color: #d4edda;
    color: #636363;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 16px;
    border-radius: 10px;
    width: 342.38px;
    height: 30px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
  `,
};

const messages = {
  error: "This is error alert box",
  warning: "This is warning alert box",
  info: "This is info alert box",
  success: "This is success alert box",
};

const getIcon = (type) => {
    switch (type) {
      case "error":
        return <SentimentVeryDissatisfied />;
      case "warning":
        return <WarningAmberRounded />;
      case "info":
        return <InfoOutlined />;
      case "success":
        return <TaskAltRounded />;
      default:
        return null;
    }
  };

export function Alert({ type = "info", message }) {
  return <div css={alertStyles[type]}>{getIcon(type)}{message || messages[type]}</div>;
}
