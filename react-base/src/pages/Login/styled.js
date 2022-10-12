import styled from 'styled-components';

// irá estilizar o h1
export const Title = styled.h1`
  background: green;

  //Irá estilizar o small que é filho do h1
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: #999;
  }
`;

// Irá estilizar o p
export const Paragrafo = styled.p`
  font-size: 80px;
`;
