import styled from "styled-components";

export const MainModal = styled.div`
  display: none;
  background-color: var(--color-black-opacity);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9998;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  transform: scale3d(0, 0, 0);
  opacity: 0;

  .modal-conten {
    background-color: var(--color-white);
    overflow-y: auto;
    min-height: 40%;
    max-height: 90%;
    border-radius: 5px;
    padding: 15px;
    display: grid;
    grid-template-rows: 2.5em 1fr 3em;
    max-width: 90%;
    animation-name: openContent;
    animation-duration: 0.3s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0, 0.63, 1, 0.99);
    transform: scale3d(0, 0, 0);
    opacity: 0;

    .modalHeader {
      display: grid;
      grid-template-columns: 1fr 2rem;
      gap: 1rem;

      p {
        font-weight: 600;
        font-size: 1.3em;
      }
    }

    .bodyModal {
      padding: 20px 0;
    }

    .footerModal {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
    }
  }

  &.modal-open {
    display: grid;
    animation-name: open;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0, 0.63, 1, 0.99);
  }

  @keyframes open {
    0% {
      transform: scale3d(0, 0, 0);
      opacity: 0;
    }

    100% {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
  @keyframes openContent {
    0% {
      transform: scale3d(0, 0, 0);
      opacity: 0;
    }

    100% {
      transform: scale3d(1, 1, 1);
      opacity: 1;
    }
  }
`;
