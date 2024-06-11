import { afterEach, expect, vi } from 'vitest'
import { cleanup } from '@testing-library/vue'
import '@testing-library/jest-dom'

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
