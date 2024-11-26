// import { Provider } from '@/components/ui/provider'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider, createSystem, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
  },
})

const system = createSystem(config)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
    <App />
    </ChakraProvider>
  </StrictMode>,
)
