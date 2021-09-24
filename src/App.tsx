import styled from 'styled-components'

import Todos from './components/Todos/Todos'
import TodoAdder from './components/TodoAdder/TodoAdder'
import { TodoContextProvider } from './context/TodoContext'

const CentralizedBox = styled.div`
  width: fit-content;
  margin: 0 auto;
  margin-top: 0.75rem;
  border: 2px solid #696969;
  border-radius: 0.75rem;
  padding: 0.75rem;
`

function App() {
  return (
    <CentralizedBox>
      <TodoContextProvider>
        <TodoAdder />
        <Todos />
      </TodoContextProvider>
    </CentralizedBox>
  )
}

export default App
