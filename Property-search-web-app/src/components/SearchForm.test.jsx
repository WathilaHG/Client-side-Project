import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('calls onSearch with form data when search button is clicked', async () => {
    const mockOnSearch = vi.fn()
    const user = userEvent.setup()
    
    render(<SearchForm onSearch={mockOnSearch} />)
    
    const minPriceInput = screen.getByLabelText(/min price/i)
    await user.clear(minPriceInput)
    await user.type(minPriceInput, '100000')
    
    const searchButton = screen.getByText(/search/i)
    await user.click(searchButton)
    
    expect(mockOnSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        minPrice: '100000',
      })
    )
  })
})
