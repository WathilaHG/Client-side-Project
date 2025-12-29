import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { FavouritesPanel } from './FavouritesPanel'

const mockFavourites = [
  {
    id: '1',
    type: 'House',
    bedrooms: 3,
    price: 250000,
    location: 'London SW1A 1AA',
    picture: 'house1.jpg'
  }
]

describe('FavouritesPanel', () => {
  it('calls onClear when clear all button is clicked', async () => {
    const mockOnClear = vi.fn()
    const user = userEvent.setup()
    
    render(
      <BrowserRouter>
        <FavouritesPanel 
          favourites={mockFavourites} 
          onRemove={() => {}} 
          onClear={mockOnClear} 
          onDropId={() => {}} 
        />
      </BrowserRouter>
    )
    
    const clearButton = screen.getByText('Clear')
    await user.click(clearButton)
    
    expect(mockOnClear).toHaveBeenCalledTimes(1)
  })
})
