import styled from "styled-components";

export const MainList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
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

    &:hover {
      box-shadow: var(--box-shadow-down);
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      transform: scale(1.1);
      .title:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 3px solid var(--color-3-hex);
        border-radius: 5px;
        animation: animate-title 0.5s ease-out forwards;
      }
      @keyframes animate-title {
        0% {
          width: 0;
        }
        100% {
          width: 100%;
        }
      }

      button:before {
          content: "";
          position: absolute;
          width: 150%;
          height: 30px;
          background: linear-gradient(var(--color-1-hex), var(--color-1-hex));
          animation: border-animate 5s linear infinite;
        }
        button:after {
          content: "";
          position: absolute;
          inset: 3px;
          background: white;
          border-radius: 5px;
        }
        @keyframes border-animate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(350deg);
          }
        }
    }

    &:hover .img-card {
      transition: transform 1.5s ease;
      transform: scale(1.2);
    }

    .box-img {
      overflow: hidden;
      border-radius: 5px 5px 0 0;
    }
    .img-card {
      max-height: 100%;
      max-width: 100%;
    }

    .body {
      padding: 10px;
      border-radius: 0 0 5px 5px;
      display: grid;
      gap: 1em;
    }
    .box-title {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title {
      font-weight: 600;
      font-size: 1em;
      text-align: center;
      color: var(--color-1-hex);
      position: relative;
      padding-bottom: 5px;
    }

    button {     
      transition: all 0.5s ease;
      padding: 10px;
      border: var(--border);
      border-radius: 5px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        z-index: 10;
        pointer-events: none;
      }
      &:hover {      
      color:var(--color-1-hex);
      background-color:var(--color-5-opacity);
      }
    }
  }
`;
