import { cleanup } from '@solidjs/testing-library'
import { afterEach } from 'vitest'
import '@testing-library/jest-dom'

afterEach(() => {
  cleanup()
})
