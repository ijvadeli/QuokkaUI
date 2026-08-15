import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Button } from './components/ui/Button'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button variant='primary'>Shop more</Button>
    <Button variant='outline'>Buy Now</Button>
  </StrictMode>,
)
