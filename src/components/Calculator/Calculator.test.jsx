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
  test('Adds', () => {
    render(<Calculator />)
    const b1 = screen.getByText('1')
    const b2 = screen.getByText('+')
    const b3 = screen.getByText('6')
    const b4 = screen.getByText('=')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('7')
  })
  test('Substracts', () => {
    render(<Calculator />)
    const b1 = screen.getByText('7')
    const b2 = screen.getByText('-')
    const b3 = screen.getByText('5')
    const b4 = screen.getByText('=')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('2')
  })
  test('Multiplies', () => {
    render(<Calculator />)
    const b1 = screen.getByText('2')
    const b2 = screen.getByText('*')
    const b3 = screen.getByText('6')
    const b4 = screen.getByText('=')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('12')
  })
  test('Divides', () => {
    render(<Calculator />)
    const b1 = screen.getByText('8')
    const b2 = screen.getByText('/')
    const b3 = screen.getByText('2')
    const b4 = screen.getByText('=')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('4')
  })
  test('Divides with decimal', () => {
    render(<Calculator />)
    const b1 = screen.getByText('5')
    const b2 = screen.getByText('/')
    const b3 = screen.getByText('2')
    const b4 = screen.getByText('=')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('2.5')
  })
  test('Modulo', () => {
    render(<Calculator />)
    const b1 = screen.getByText('8')
    const b2 = screen.getByText('%')
    const b3 = screen.getByText('3')
    const b4 = screen.getByText('=')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('2')
  })
  test('Erases', () => {
    render(<Calculator />)
    const b1 = screen.getByText('8')
    const b2 = screen.getByText('5')
    const b3 = screen.getByText('3')
    const b4 = screen.getByText('C')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('')
  })
  test('Changes sign', () => {
    render(<Calculator />)
    const b1 = screen.getByText('4')
    const b2 = screen.getByText('5')
    const b3 = screen.getByText('2')
    const b4 = screen.getByText('⁺∕₋')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('-452')
  })
  test('Decimal', () => {
    render(<Calculator />)
    const b1 = screen.getByText('4')
    const b2 = screen.getByText('.')
    const b3 = screen.getByText('5')
    const b4 = screen.getByText('2')
    userEvent.click(b1)
    userEvent.click(b2)
    userEvent.click(b3)
    userEvent.click(b4)
    expect(document.getElementById('pantalla').innerHTML).toBe('4.52')
  })
})
