import React from 'react'
import Button from '../Button'

const Calculator = () => {
  const [, setLastNumber] = React.useState(0)
  const [, setLastOp] = React.useState('+')
  return (
    <div>
      <div id="pantalla" />
      <div className="botones">
        <div className="numpad">
          <div>
            <Button text="C" sets={{ setLastNumber, setLastOp }} />
            <Button text="⁺∕₋" sets={{ setLastNumber, setLastOp }} />
            <Button text="%" sets={{ setLastNumber, setLastOp }} />
          </div>
          <div className="fila">
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
          </div>
          <div className="fila">
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
          </div>
          <div className="fila">
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
          </div>
          <div>
            <Button text="0" />
            <Button text="." />
          </div>
        </div>
        <div>
          <Button text="/" sets={{ setLastNumber, setLastOp }} />
          <Button text="*" sets={{ setLastNumber, setLastOp }} />
          <Button text="-" sets={{ setLastNumber, setLastOp }} />
          <Button text="+" sets={{ setLastNumber, setLastOp }} />
          <Button text="=" sets={{ setLastNumber, setLastOp }} />
        </div>
      </div>
    </div>
  )
}

export default Calculator
