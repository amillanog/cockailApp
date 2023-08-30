import styled from "styled-components";

export const ButtonMain = styled.button`
  outline: none !important;
  font-size: 1em;
  font-weight: 400;
  line-height: 1;
  padding: 0 20px;
  border: none;
  border-radius: 5px;
  color: ${(props) =>
    props.activo ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.7)"};
  background-color: ${(props) =>
    props.activo ? "var(--color-5-hex)" : "var(--color-4-opacity)"};
  cursor: pointer;
  transition: all 0.5s ease;
  box-shadow: var(--box-shadow-dow);
  font-family: var(--font);
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  height: calc(1.5em + 0.75rem + 2px);
  &:hover p {
    position: relative;
    /* padding-bottom:3px; */
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      border-bottom: 3px solid white;
      border-radius: 5px;
      animation: animate-title 0.5s ease-out forwards;
    }
    
  }
`;
