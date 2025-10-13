import { render, screen } from '@solidjs/testing-library'
import { expect, test } from 'vitest'
import { MyButton } from '../src'

test('button', () => {
  render(() => <MyButton type="primary" />)

  const buttonElement = screen.getByText(/my button/i)

  expect(buttonElement.outerHTML).toMatchInlineSnapshot(
    `"<button class="my-button">my button<br> type: primary<br> count: 0</button>"`,
  )
})
