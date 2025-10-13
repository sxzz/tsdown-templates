import { createSignal } from 'solid-js'

interface MyButtonProps {
  type?: 'primary'
}

export function MyButton({ type }: MyButtonProps) {
  let [count, setCount] = createSignal(0)
  return (
    <button class="my-button" onClick={() => setCount(count() + 1)}>
      my button
      <br /> type: {type}
      <br /> count: {count()}
    </button>
  )
}
