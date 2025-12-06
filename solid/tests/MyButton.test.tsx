import { render } from '@solidjs/testing-library'
import { expect, test } from 'vitest'
import { MyButton } from '../src'

test('button', () => {
  const screen = render(() => <MyButton type="primary" />)
  expect(screen.container.innerHTML).toMatchInlineSnapshot(
    `"<button class="my-button">my button<br> type: primary<br> count: 0</button>"`,
  )
})
