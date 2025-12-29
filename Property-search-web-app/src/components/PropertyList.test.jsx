import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { PropertyList } from './PropertyList'

const mockProperties = [
  {
    id: '1',
    type: 'House',
    bedrooms: 3,
    price: 250000,
    location: 'London SW1A 1AA',
    picture: 'house1.jpg',
    added: { day: 1, month: 'January', year: 2024 }
  }
]

describe('PropertyList', () => {
  it('renders all properties passed as props', () => {
    render(
      <BrowserRouter>
        <PropertyList properties={mockProperties} onFavourite={() => {}} />
      </BrowserRouter>
    )
    
    expect(screen.getByText('3 bed House')).toBeInTheDocument()
    expect(screen.getByText('London SW1A 1AA')).toBeInTheDocument()
  })
})
