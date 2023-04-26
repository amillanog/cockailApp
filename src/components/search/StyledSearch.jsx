import styled from "styled-components";

export const BoxInputSearch = styled.div`
  position: relative;
  input {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(1, 22, 43, 1) 100%
    );
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    padding-right:35px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    &::placeholder {
      color: rgb(194, 194, 194);
    }
  }
  span {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;
  }
`;
