import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { brandTheme } from './theme/BrandTheme.ts'
import { Fonts } from './fonts/Fonts.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={brandTheme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
