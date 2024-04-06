import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { TodoApp } from './pages/TodoApp'
import { GabageBox } from './pages/GabageBox'
import { GlobalStyle } from './styles/globalStyle'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { UseCardsProvider } from './hooks/useCards'

const App = () => {
  return (
    <UseCardsProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route index element={<TodoApp />} />
          <Route path='gabagebox' element={<GabageBox />} />
          <Route path='*' element={<Navigate replace to='' />} />
        </Routes>
      </BrowserRouter>
    </UseCardsProvider>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<App />)