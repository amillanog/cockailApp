import styled from "styled-components";

export const MainList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 2em;

  .carditem {
    border-radius: 5px;
    border: var(--border);
    background-color: white;
    position: relative;
    z-index: 0;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    .face {
      max-height: 100%;
      max-width: 100%;
      border-radius: 5px 5px 0 0;
    }

    .body {
      padding: 10px;
      border-radius: 0 0 5px 5px;
      display: grid;
      gap: 1em;
    }
    .title {
      font-weight: 600;
      font-size: 1em;
    }
    button {
      outline: 1px dashed #333;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: 0.4s;
      &:hover {
        color: white;
        background-color: #222;
      }
    }

    &:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }

    &:active {
      color: #000;
    }

    &:active:after {
      background: transparent;
    }

    &:hover:before {
      opacity: 1;
    }

    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: white;
      left: 0;
      top: 0;
      border-radius: 10px;
    }

    @keyframes glowing {
      0% {
        background-position: 0 0;
      }
      50% {
        background-position: 400% 0;
      }
      100% {
        background-position: 0 0;
      }
    }

    
  }
`;
