import React from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda';

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #FFF;
  transition: background-color .3s ease; 

  &:hover {
    background-color: #326ac0;
    cursor: pointer;

  }

`;

const Form = () => {
  const COIN = [
    {cod:'USD', nombre: 'Dolar De Estados Unidos'},
    {cod:'MXN', nombre: 'Peso Mexicano'},
    {cod:'EUR', nombre: 'Euro'},
    {cod:'GBP', nombre: 'Libra Esterlina'}
  ]
  const [Select, state, setState] = useMoneda('Elige Tu Moneda', '', COIN)

  return (
    <form>
      <Select />

      <Button
        type= 'submit'
        value= 'calcular'
      />
    </form>
  );
}

export default Form;
