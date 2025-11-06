import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders title', () => {
  render(<App />)
  expect(screen.getByText('🧩 TaskFlow Frontend')).toBeInTheDocument()
})
