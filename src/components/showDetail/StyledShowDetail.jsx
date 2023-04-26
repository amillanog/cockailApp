import styled from "styled-components";

export const MainShowDetail = styled.div`
  max-width: 1000px;
  .head {
    margin-bottom: 0.5em;
    .title {
      font-weight: 600;
      font-size: 1.5em;
    }
  }
  .body {
    display: grid;
    grid-template-columns: 400px 1fr;
    align-items: center;
    gap: 1em;
    margin-bottom: 1em;
    .box-img-main {
      img {
        width: 100%;
        border-radius: 5px;
      }
    }
    .main-ingredients {
      display: flex;
      flex-direction: column;
      gap: 1em;
      height: 100%;
      .title-ingredient {
        font-size: 1.5em;
        font-weight: 600;
        margin-bottom: 1em;
      }
      .list-ingredient {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1em;
        .items {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
      }
      .img-ingredients {
        height: 50px;
        width: 50px;
      }
    }
  }
  .main-instructions {
    .title {
      font-size: 1.5em;
      font-weight: 600;
    }
  }
  @media screen and (max-width: 768px) {
    .body {
      grid-template-columns: 1fr;
    }
  }
`;
