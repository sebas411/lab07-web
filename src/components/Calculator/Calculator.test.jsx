import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Calculator from './Calculator'

describe('Calculator functions tests', () => {
  test('Renders correctly', () => {
    render(<Calculator />)
  })
  test('Writes to screen', () => {
    render(<Calculator />)
    const b1 = screen.getByText('1')
    const b2 = screen.getByText('6')
    userEvent.click(b1)
    userEvent.click(b2)
    expect(document.getElementById('pantalla').innerHTML).toBe('16')
  })
})
