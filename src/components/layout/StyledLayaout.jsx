import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-column: span 3;
  box-shadow: var(--box-shadow-down);
  position: relative;
`;

export const MainContainer = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 17em);
  padding-top: 3em;
  padding-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
  /* @media screen and (max-width: 768px) {
    & {
      height: calc(100vh - 21em);
    }
  } */
`;

export const FooterContainer = styled.footer`
  grid-column: span 3;
  background-color: #0d0d0d;
  padding-left: 1em;
  padding-right: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  .text-footer {
    color: white;
    text-align: center;
    font-size: 0.8em;
  }

  .box-btn {
    max-height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    button {
      height: 2.5em !important;
    }
  }
`;
