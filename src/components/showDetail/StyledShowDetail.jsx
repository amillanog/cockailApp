import styled from "styled-components";

export const MainShowDetail = styled.div`
  max-width: 1000px;
  .head {
    margin-bottom: 0.5em;
    .title {
      font-weight: 600;
      font-size: 1.3em;
      color: var(--color-1-hex);      
    }
  }
  .body {
    display: grid;
    /* grid-template-columns: 200px 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    /* align-items: center; */
    gap: 1em;
    margin-bottom: 1em;
  }
  .box-img-main {
    img {
      width: 100%;
      border-radius: 5px;
    }
  }
  .main-ingredients {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    height: 100%;
    .list-ingredient {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
      gap: 1em;
      .items {
        display: flex;
        align-items: center;
        /* flex-wrap: wrap; */
        border: 1px solid var(--color-3-hex);
        border-radius: 5px;
        padding: 0.5em;
      }
    }
  }
  .title-detail {
    font-size: 1.2em;
    font-weight: 600;
    color: var(--color-1-hex);
    /* margin-bottom: .5em; */
  }
  .img-ingredients {
    max-height: 50px;
    /* max-width: 50px; */
  }
  /* .main-instructions {
    .title {
      font-size: 1.3em;
      font-weight: 600;
    }
  } */
  @media screen and (max-width: 768px) {
    .body {
      grid-template-columns: 1fr;
    }
  }
`;
