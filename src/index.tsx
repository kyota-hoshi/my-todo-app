import * as React from 'react'
import { render } from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import { TodoApp } from './TodoApp'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoApp />
    </>
  )
}

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
    padding: 0;
    border: none;
    background-color: white;
    font-size: 20px;
    font-weight: normal;
  }

  body {
    margin: 0;
  }
`

render(<App />, document.getElementById('app'))