import styled from '@emotion/styled';

export const Status = styled.span `
display: block;
border-radius: 50%;
  width: 10px;
  height: 10px;
  margin-right: 10px;
  background-color: ${props => {
    if (props.isonline) {
      return 'green';
    }
    return 'red';
  }};
`;

export const FriendImg = styled.img `
border-radius: 5px;
background-color: #CACFD2;
padding: 10px;
margin-right: 10px;
`;

export const FriendName = styled.p `
font-size: 18px;
  font-weight: 700;
`;