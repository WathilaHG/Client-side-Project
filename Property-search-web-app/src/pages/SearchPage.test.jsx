import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { SearchPage } from './SearchPage'

describe('SearchPage', () => {
  it('adds property to favourites when heart button is clicked', async () => {
    const user = userEvent.setup()
    
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    )
    
    const heartButtons = screen.getAllByText('Favourite')
    await user.click(heartButtons[0])
    
    expect(screen.getByText('Favourites')).toBeInTheDocument()
  })
})
