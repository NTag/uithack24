import styled from "styled-components";

export const Container = styled.div`
  padding: 12px;
`;


export const Header = styled.h1`
  font-size: 40px;
  margin-top: 150px;
  margin-bottom: 90px;
  text-align: center;
  font-style: italic;
  font-weight: 300;
`

export const ReactionsGrid = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr 1fr;
  gap: 34px;

  :nth-child(1) {
       grid-row: 1; 
       grid-column: 1 / span 2; 
      }
      
      :nth-child(2) {
        grid-row: 2;
        justify-self: start;
      }
      
      :nth-child(3) {
        grid-row: 2; 
        justify-self: end; 
      }
      
      :nth-child(4) {
        grid-row: 3;
        grid-column: 1 / span 2;
      }
`