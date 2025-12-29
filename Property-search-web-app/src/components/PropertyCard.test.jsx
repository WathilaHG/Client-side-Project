import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { PropertyCard } from './PropertyCard'

const mockProperty = {
  id: '1',
  type: 'House',
  bedrooms: 3,
  price: 250000,
  location: 'London SW1A 1AA',
  picture: 'house1.jpg',
  added: { day: 1, month: 'January', year: 2024 }
}

describe('PropertyCard', () => {
  it('calls onFavourite with property id when heart button is clicked', async () => {
    const mockOnFavourite = vi.fn()
    const user = userEvent.setup()
    
    render(
      <BrowserRouter>
        <PropertyCard property={mockProperty} onFavourite={mockOnFavourite} />
      </BrowserRouter>
    )
    
    const favouriteButton = screen.getByText('Favourite')
    await user.click(favouriteButton)
    
    expect(mockOnFavourite).toHaveBeenCalledWith('1')
  })
})
