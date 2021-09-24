import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

export default function useTodo() {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('Component must be within TodoContext.Provider')
  }

  return context
}
