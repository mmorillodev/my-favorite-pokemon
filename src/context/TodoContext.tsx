import { createContext, PropsWithChildren, ReactNode } from 'react'
import { useCookies } from 'react-cookie'

interface ITodoItem {
  id: number
  todo: string
  done: boolean
}

interface ITodoListContext {
  todos: ITodoItem[]
  setTodos: (value: ITodoItem[]) => void
}

export const TodoContext = createContext<ITodoListContext>({
  todos: [],
  setTodos: () => {},
})

export function TodoContextProvider({
  children,
}: PropsWithChildren<ReactNode>) {
  const [{ todos }, setCookie] = useCookies(['todos'])

  if (!todos) {
    setCookie('todos', [])
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos: value => setCookie('todos', value),
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
