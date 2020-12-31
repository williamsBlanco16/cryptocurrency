import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from '@emotion/styled'
import image from '../cryptomonedas.png'
import '../index.css'

import Form from './Form'
import Quotation from './Quotation';
import Spinner from './Spinner';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

const App = () => {
  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("")
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    if(!moneda || !criptomoneda) return
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
    const requestAPI = async () => {
      const response = await axios.get(url)
      console.log(response);
      setLoading(false)
      setResult(response.data.DISPLAY[criptomoneda][moneda])
    }
    setLoading(true)
    requestAPI()
  },[moneda,criptomoneda])

  const component = loading ? <Spinner/> : <Quotation result={result}/>

  return (
    <Container>
      <div>
        <Image
          src={image}
          alt='imagen crypto'
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas Al Instante</Heading>
        <Form 
          setMoneda={setMoneda}
          setCriptomoneda={setCriptomoneda}
        />
        {component}
      </div>
    </Container>
  );
}

export default App;
