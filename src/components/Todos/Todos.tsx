import { useCallback } from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import styled from 'styled-components'
import useTodo from '../../hooks/useTodo'
import { Button, CenteredContainer, Clickable } from '../../styles/Commons'

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.75rem;

  & li:not(:last-child) {
    margin-bottom: 8px;
  }
`

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const TodoLabel = styled.span<{ done?: boolean }>`
  text-decoration: ${p => (p.done ? 'line-through' : 'none')};
`

const Todos = () => {
  const { todos, setTodos } = useTodo()

  const markTodoAsDone = useCallback(
    (index: number) => {
      setTodos([
        ...todos.slice(0, index),
        { ...todos[index], done: !todos[index].done },
        ...todos.slice(index + 1, todos.length),
      ])
    },
    [setTodos, todos]
  )

  const deleteTodo = useCallback(
    (index: number) => {
      todos.splice(index, 1)
      setTodos(todos)
    },
    [todos, setTodos]
  )

  return (
    <TodoList>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id}>
          <TodoLabel done={todo.done}>{todo.todo}</TodoLabel>
          <CenteredContainer>
            <Button onClick={() => markTodoAsDone(index)}>
              {todo.done ? 'Undone' : 'Done'}
            </Button>
            <Clickable onClick={() => deleteTodo(index)}>
              <DeleteOutlineIcon />
            </Clickable>
          </CenteredContainer>
        </TodoItem>
      ))}
    </TodoList>
  )
}

export default Todos
