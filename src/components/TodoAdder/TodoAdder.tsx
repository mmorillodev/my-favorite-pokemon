import { FormEvent, useCallback, useState } from 'react'
import { Form, Input, Button } from '../../styles/Commons'
import useTodo from '../../hooks/useTodo'

const TodoAdder = () => {
  const [currentTodo, setCurrentTodo] = useState('')
  const { todos, setTodos } = useTodo()

  const clickHandler = useCallback(() => {
    if (!currentTodo) return

    setTodos([...todos, { id: todos.length, todo: currentTodo, done: false }])
    setCurrentTodo('')
  }, [setTodos, currentTodo])

  const submitHandler = useCallback(
    (e: FormEvent) => {
      e.preventDefault()

      clickHandler()
    },
    [clickHandler]
  )

  return (
    <Form onSubmit={submitHandler}>
      <Input
        placeholder="Eg: Feed the dog"
        value={currentTodo}
        onChange={e => setCurrentTodo(e.target.value)}
      />
      <Button onClick={clickHandler} disabled={!currentTodo}>
        Add
      </Button>
    </Form>
  )
}

export default TodoAdder
