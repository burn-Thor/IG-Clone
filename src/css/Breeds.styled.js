import styled from "styled-components";

export const CatBreedsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const EachBread = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: right;
  border: 1px solid black;
  width: auto;
  margin: 20px;
  /* padding: 10px; */
`;

export const BreedImg = styled.img`
  text-align: left;
  border: 1px solid black;
  width: 100px;
  height: fit-content;
`;

export const BreedText = styled.div`
  text-align: right;
  border: 1px solid black;
  width: 140px;
  height: auto;
`;
