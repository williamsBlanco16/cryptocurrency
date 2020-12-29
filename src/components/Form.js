import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios';
import Error from './Error';

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

const Form = ({setMoneda, setCriptomoneda}) => {
  const COIN = [
    {cod:'USD', nombre: 'Dolar De Estados Unidos'},
    {cod:'MXN', nombre: 'Peso Mexicano'},
    {cod:'EUR', nombre: 'Euro'},
    {cod:'GBP', nombre: 'Libra Esterlina'}
  ]
  const [cripto, setCripto] = useState([]);
  const [error, setError] = useState(false)
  const [Select, stateMoneda, setStateMoneda] = useMoneda('Elige Tu Moneda', '', COIN)
  const [SelectCripto, stateCripto, setStateCripto] = useCriptomoneda('Elige Tu Criptomoneda','',cripto)


  const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
  useEffect(() => {
    const requestAPI = async () => {
      const response = await axios.get(URL)
      setCripto(response.data.Data)
    }
    requestAPI()
  }, []);

  const handlerSubmit = e => {
    e.preventDefault()
    console.log(stateMoneda, stateCripto);
    if(!stateMoneda || !stateCripto) {
      setError(true)
      return
    }

    setError(false)
    setMoneda(stateMoneda)
    setCriptomoneda(stateCripto)
  }

  return (
    <form onSubmit={handlerSubmit}> 
      {error ? <Error msj='Todos los campos son obligatorios'/> : null}
      <Select />
      <SelectCripto />
      <Button
        type= 'submit'
        value= 'calcular'
      />
    </form>
  );
}

export default Form;
