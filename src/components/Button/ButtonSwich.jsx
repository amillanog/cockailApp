import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ButtonSwitch = ({
  titleOn,
  titleOff,
  title,
  onClick,
  initialOnOff,
  ancho,
  id
}) => {
  const [btnOnOff, setbtnOnOff] = useState(initialOnOff ? true : false);

  useEffect(() => {
    setbtnOnOff(initialOnOff ? true : false);
  }, [initialOnOff]);

  return (
    <>
      {title === "" || typeof title === "undefined" ? null : (
        <label className="margin-b-5 text-left">{title}</label>
      )}

      <BoxBtn
        btnOnOff={btnOnOff}
        ancho={ancho}
        onClick={
          typeof onClick === "undefined"
            ? () => {
                setbtnOnOff((v) => !v);
              }
            : (e) => {
                setbtnOnOff((v) => !v);
                onClick(e);
              }
        }
      >
        <div className="box-bar">
          <div className="bar">
            <span className="title-on subtitle">{titleOn}</span>
            <span className="title-off subtitle">{titleOff}</span>
          </div>
        </div>
      </BoxBtn>
    </>
  );
};
export default ButtonSwitch;

// const BoxBtn = styled.div.attrs((props) => ({ width: props.ancho }))`
const BoxBtn = styled.div`
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.5s ease;
  background-color: transparent;
  font-size: 1em;
  width: ${(props) => props.ancho};
  height: calc(1.5em + 0.75rem + 2px);
  box-shadow: var(--box-shadow);

  & .box-bar {
    width: 100%;
    height: 100%;
    position: relative;
    transition: background-color 0.3s ease;
    background-color: var(--color-white);

    & .bar {
      position: absolute;
      background-color: #ffffff;
      width: 20px;
      height: 100%;
      top: 0;
      left: 0;
      transition: transform 0.3s ease-in;
      transform: translate3d(
        ${({ btnOnOff, ancho }) =>
          btnOnOff ? `calc(${ancho} - 20px)` : "calc(0px - 20px)"},
        0,
        0
      );
      span {
        position: absolute;
        font-size: 0.9em;
        padding: 0 5px;
        color: var(--color-white);
      }

      & .title-off {
        background-color: var(--color-gray);
        height: 100%;
        top: 0;
        left: 20px;
        width: 170px;
        white-space: nowrap;
        display: flex;
        align-items: center;
      }

      & .title-on {
        background-color: var(--color-text);
        white-space: nowrap;
        height: 100%;
        width: 170px;
        top: 0;
        right: 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
`;
