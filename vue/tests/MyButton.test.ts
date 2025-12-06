import { render } from 'vitest-browser-vue'
import { expect, test } from 'vitest'
import { MyButton } from '../src'

test('button', async () => {
  const page = render(MyButton, {
    props: {
      type: 'primary',
    },
  })
  expect(page.container.textContent).toMatchInlineSnapshot(
    `" my button type: primary count: 0"`,
  )
  expect(page.container.innerHTML).toMatchInlineSnapshot(
    `"<button class="my-button"> my button<br> type: primary<br> count: 0</button>"`,
  )
})
