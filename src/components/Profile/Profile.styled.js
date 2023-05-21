import styled from '@emotion/styled';

export const Container = styled.div `
max-width: 240px;
margin: 20px auto;
border-radius: 5px;
background-color: lightblue;
`;

export const Description = styled.div `
background-color: #FFFFFF;
padding: 20px;
margin-bottom: 10px;
border-radius: 5px;
`;

export const UserImg = styled.div `
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
padding: 15px;
`;

export const UserName = styled.p `
font-size: 20px;
font-weight: 700;
margin-bottom: 10px;
`;

export const Tag = styled.p `
font-size: 16px;
margin-bottom: 10px;
`;

export const Stats = styled.ul `
display: flex;
justify-content: space-around;
padding: 20px;
`;

export const StatsItem = styled.li `
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Quantity = styled.span `
font-weight: 700;
font-size: 16px;
margin-top: 7px;
`;