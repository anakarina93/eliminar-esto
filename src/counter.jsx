import {useState} from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({value}) => {
  const [ counter, setCounter ] = useState(0);
  const handleAdd = () =>{
    setCounter ( counter +1);
  }
  const handleMinus =() => {
    setCounter(counter -1);
  }

  const reset =()=>{
    setCounter (value) ;
  }

  return (
    <>
      <h1> CounterApp </h1>
      <h2> { counter } </h2>
      <button onClick={handleAdd } > +1 </button>
      <button onClick={handleMinus}> -1</button>
      <button onClick={reset}>Reset</button>
    </>

  )
}


CounterApp.propTypes={
    value: PropTypes.number
}