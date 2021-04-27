import React from 'react'
import Button from '../Button'

import './Calculator.css'

const Calculator = () => {
  const [lastNumber, setLastNumber] = React.useState(0)
  const [lastOp, setLastOp] = React.useState('+')
  const [lastType, setLastType] = React.useState('eq')
  return (
    <div className="calculator">
      <div className="display">
        <span id="pantalla" />
      </div>
      <div className="botones">
        <div className="numpad">
          {['C', '⁺∕₋', '%', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((text, index) => <Button key={index} text={text} sets={{ setLastNumber, setLastOp, setLastType }} gets={{ lastNumber, lastOp, lastType }} />)}
        </div>
        <div className="operadores">
          {['/', '*', '-', '+', '='].map((text, index) => <Button key={index} text={text} sets={{ setLastNumber, setLastOp, setLastType }} gets={{ lastNumber, lastOp, lastType }} />)}
        </div>
      </div>
    </div>
  )
}

export default Calculator
