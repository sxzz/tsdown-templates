import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'
import { MyButton } from '../src'

test('button', () => {
  const app = mount(MyButton, {
    props: {
      type: 'primary',
    },
  })
  expect(app.text()).toMatchInlineSnapshot(`"my button type: primary count: 0"`)
  expect(app.html()).toMatchInlineSnapshot(
    `"<button class="my-button"> my button<br> type: primary<br> count: 0</button>"`,
  )
})
