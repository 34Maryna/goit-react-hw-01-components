import styled from '@emotion/styled';

export const Table = styled.table `
margin: 0px auto;
border-collapse: collapse;
background-color: #FFFFFF;
color: #717D7E;

thead {
    background-color: #5DADE2;
    color: #FFFFFF;
  }
  th,
  td {
    padding: 10px 80px;
    border: 1px solid #85C1E9;
`;

export const TBody = styled.tbody `
border-radius: 5px;
tr:nth-of-type(2n) {
    background-color: #BDC3C7;
  }
`;
