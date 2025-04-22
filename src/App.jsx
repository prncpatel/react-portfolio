import './App.css'
import Portfolio from './Portfolio'
import { Toaster } from 'sonner'

function App() {

  return (
    <>
      <Portfolio />
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
