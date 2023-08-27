import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-rows: 3em 1fr;
  grid-column: span 3;
  gap:.5em;
  background-image: url(../src/assets/image/bg-search.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: var(--box-shadow-down);
  position: relative;
`;

export const MainContainer = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 16.5em);
  padding-top: 3em;
  padding-bottom: 2em;
  padding-left: 2em;
  padding-right: 2em;
`;

export const FooterContainer = styled.footer`
  grid-column: span 3;
  background-color: #0D0D0D;
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
