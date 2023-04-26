import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(1, 22, 43, 1) 100%
  );
  grid-column: span 3;
  .main-header {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 20px;
    position: relative;
  }
`;

export const MainContainer = styled.main`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - 5.5em);
  padding-top: 2em;
  padding-bottom: 3em;
  padding-left: 1em;
  padding-right: 1em;
`;

export const FooterContainer = styled.footer`
  display: grid;
  grid-column: span 3;
  position: relative;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(1, 22, 43, 1) 100%
  );
  padding-left: 1em;
  padding-right: 1em;

  // grid-template-columns: 6fr 1fr;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 3;
  position: relative;
  background-color: var(--color-principal);
  display: grid;
  transition: background-color 0.5s ease;
  /* grid-template-columns: 1fr 80px; */
  justify-items: center;

  // align-items: center;

  .text-footer {
    color: white;
    // padding-left: 37px;
    text-align: center;
  }

  .box-btn {
    max-height: 100%;
    // padding-right: 30px;
    position: absolute;
    top: 0;
    right: 0;

    button {
      height: 2.5em !important;
    }
  }
`;
