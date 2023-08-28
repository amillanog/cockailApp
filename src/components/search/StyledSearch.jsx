import styled from "styled-components";

export const BoxInputSearch = styled.div`
  position: relative;
  input {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5) 0%,
      rgba(1, 22, 43, 0.5) 100%
    );
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75em + 2px);
    padding: 0.375em 0.75em;
    padding-right:35px;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    border: 1px solid #ced4da;
    border-radius: 0.25em;
    
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
