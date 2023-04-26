import styled from "styled-components";

export const MainList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2em;

  .box-img {
    position: relative;
    .title {
      position: absolute;
      left_: 0;
      bottom: 1em;
      text-align: center;
      padding: 5px;
      font-weight: 600;
      font-size: 0.9em;      
      background-color: rgb(255 255 255 / 69%);
      width: 100%;
      cursor: pointer;
    }
    img {
      box-shadow: var(--box-shadow);
      border-radius: 5px;
      max-width: 100%;
    }
  }
`;