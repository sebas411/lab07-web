import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, sets }) => {
  const onClick = () => {
    if (Number.isNaN(parseInt(text, 10))) {
      if (text in ['*', '+', '-']) {
        sets.setLastNumber((old) => {
          
        })
      }
      console.log(text)
    } else {
      const pantalla = document.getElementById('pantalla')
      if (pantalla.innerHTML.length < 9) {
        pantalla.innerHTML += text
      }
    }
  }
  return (
    <button type="button" onClick={onClick}>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  sets: PropTypes.objectOf(PropTypes.func),
}

Button.defaultProps = {
  sets: { setLastNumber: () => {}, setLastOp: () => {} },
}

export default Button
