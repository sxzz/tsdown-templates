/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/svelte'
import { expect, test } from 'vitest'
import MyButton from '../src/MyButton.svelte'

test('button renders with default label', () => {
  render(MyButton)

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent('Click me: 0')
})

test('button renders with custom label', () => {
  render(MyButton, { props: { label: 'Count' } })

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toHaveTextContent('Count: 0')
})

test('button increments count on click', async () => {
  render(MyButton, { props: { label: 'Test' } })

  const buttonElement = screen.getByRole('button')
  expect(buttonElement).toHaveTextContent('Test: 0')

  await buttonElement.click()
  expect(buttonElement).toHaveTextContent('Test: 1')

  await buttonElement.click()
  expect(buttonElement).toHaveTextContent('Test: 2')
})

test('button calls onclick callback with count', async () => {
  let receivedCount = 0
  const handleClick = (count: number) => {
    receivedCount = count
  }

  render(MyButton, { props: { onclick: handleClick } })

  const buttonElement = screen.getByRole('button')
  
  await buttonElement.click()
  expect(receivedCount).toBe(1)

  await buttonElement.click()
  expect(receivedCount).toBe(2)
})
