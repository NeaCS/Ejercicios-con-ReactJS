import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {sumar, restar, reset, sumar_5, restar_5} from "../actions/contadorActions"

const ContadorRedux = () => {
  const state = useSelector(state=> state)
  const dispatch = useDispatch()


  return (
    <div>
        <h2>Contador de Redux</h2>
        <nav>
          <button onClick={()=> dispatch(sumar())}>+</button>
          <button onClick={()=> dispatch(restar())}>+</button>
          <button onClick={()=> dispatch(reset())}>0</button>
          <button onClick={()=> dispatch(sumar_5())}>+5</button>
          <button onClick={()=> dispatch(restar_5())}>-5</button>
        </nav>
        <h3>{state.contador}</h3>
    </div>
  )
}

export default ContadorRedux