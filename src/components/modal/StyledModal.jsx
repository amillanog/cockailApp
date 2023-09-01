import styled from "styled-components";

export const MainModal = styled.div`
  display: none;
  background-color: var(--color-black-opacity);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  justify-content: center;
  align-items:center;
  /* grid-template-columns: 1fr; */
  /* justify-items: center; */
  /* justify-content:center;
  align-items: center; */

  .modal-conten {
    display: grid;
    grid-template-rows: 3em 1fr;
    gap: 1em;
    justify-content: center;
    align-items:center;
    background-color: var(--color-white);
    overflow: hidden;
    border-radius: 5px;
    max-width: 90%;
    max-height: calc(90% - 3em);
    min-width: 40%;
    min-height: calc(40% - 3em);

    .modalHeader {
      display: grid;
      grid-template-columns: 1fr 2em;
      padding: 0.5em;
      gap: 0.5em;

      .title-header {
        font-weight: 600;
        font-size: 1.3em;
      }
      .close {
        cursor: pointer;
      }
    }

    .bodyModal {
      height: 100%;
      width:100%;
      overflow-y: auto;
      padding-left: 1em;
      padding-right: 1em;
      padding-bottom: 1em;
    }

    .footerModal {
      display: flex;
      /* justify-content: space-evenly; */
      align-items: center;
      flex-wrap: wrap;
    }
  }

  &.modal-open {
    display: flex;
  }
`;
