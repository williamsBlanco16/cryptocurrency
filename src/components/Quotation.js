import React from 'react';
import styled from '@emotion/styled'

const ResultDiv = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif
`;

const Paragraph = styled.p`
  font-size: 18px;
  span {
    font-weight: bold
  }
`;

const Price = styled.p`
  font-size: 30px;
`

const Quotation = ({result}) => {
  if(!Object.keys(result).length) return null;
  console.log(result);
  return (
    <ResultDiv>
      <Paragraph>El precio es: <span>{result.PRICE}</span></Paragraph>
      <Paragraph>El precio màs alto del dìa: <span>{result.HIGHDAY}</span></Paragraph>
      <Paragraph>El precio màs bajo del dìa: <span>{result.LOWDAY}</span></Paragraph>
      <Paragraph>Variaciòn ùltimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></Paragraph>
      <Paragraph>Ùltima actualizaciòn: <span>{result.LASTUPDATE}</span></Paragraph>

    </ResultDiv>
  );
}

export default Quotation;
