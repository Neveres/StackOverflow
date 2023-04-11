import { createContext } from 'react'

const AppContext = createContext(
  {} as {
    state: StackOverflow.AppContext.State
    actions: StackOverflow.AppContext.Actions
  },
)

export default AppContext
