import React, {Fragment, useState} from 'react'

export default function useMoneda(label, stateInicial, opciones) {
  const [state, setState] = useState({stateInicial});

  const Select = () => (
    <Fragment>
      <label>{label}</label>  
      <select>
        <option value="">--Seleccione</option>
        { 
          opciones.map( opcion =>(
            <option key={opcion.cod} value={opcion.cod}>{opcion.nombre}</option>
          ))
        }
      </select>
    </Fragment>
  )

  return [Select, state, setState]
}
