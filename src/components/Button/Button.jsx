import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, sets, gets }) => {
  const onClick = () => {
    const pantalla = document.getElementById('pantalla')
    const operate = (a, b, type) => {
      let result = 0
      switch (type) {
        case '+':
          result = a + b
          break
        case '*':
          result = a * b
          break
        case '/':
          if (b === 0) return 'ERROR'
          result = a / b
          break
        case '-':
          result = a - b
          break
        case '%':
          if (b === 0) return 'ERROR'
          result = a % b
          break
        default:
          break
      }
      if (`${result}`.length <= 9) {
        return result
      }
      return 'ERROR'
    }

    // operators
    if (Number.isNaN(parseInt(text, 10)) && gets.lastType !== 'op' && text !== '.') {
      if (text === 'C') {
        sets.setLastOp('+')
        sets.setLastNumber(0)
        sets.setLastType('op')
        pantalla.innerHTML = ''
      } else if (text === '⁺∕₋') {
        const newNum = -operate(gets.lastNumber, parseFloat(pantalla.innerHTML, 10), gets.lastOp)
        sets.setLastOp('+')
        sets.setLastNumber(0)
        sets.setLastType('eq')
        if (`${newNum}`.length <= 9) {
          pantalla.innerHTML = newNum
        } else pantalla.innerHTML = 'ERROR'
      } else if (text === '=') {
        const newNum = operate(gets.lastNumber, parseFloat(pantalla.innerHTML, 10), gets.lastOp)
        sets.setLastOp('+')
        sets.setLastNumber(0)
        sets.setLastType('eq')
        pantalla.innerHTML = newNum
      } else {
        const newNum = operate(gets.lastNumber, parseFloat(pantalla.innerHTML, 10), gets.lastOp)
        sets.setLastOp(text)
        sets.setLastNumber(newNum)
        sets.setLastType('op')
        pantalla.innerHTML = newNum
      }
    // numbers
    } else {
      if (gets.lastType !== 'num') {
        pantalla.innerHTML = text
      } else if (pantalla.innerHTML.length < 9) {
        pantalla.innerHTML += text
      }
      sets.setLastType('num')
    }
  }
  return (
    <button className="boton" type="button" onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  sets: PropTypes.objectOf(PropTypes.func).isRequired,
  gets: PropTypes.shape({
    lastNumber: PropTypes.number, lastOp: PropTypes.string, lastType: PropTypes.string,
  }).isRequired,
}

export default Button
