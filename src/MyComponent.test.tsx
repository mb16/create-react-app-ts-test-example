import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MyComponent } from './MyComponent'

afterEach(cleanup) 
describe('This will test MyComponent', () => {
  test('renders message', () => {
     const { getByText } = render(<MyComponent />)
     
     expect(getByText('hello'))
     .toBeInTheDocument()
  });
});