import { createContext, useReducer } from "react"

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  setExpenses: (expenses) => {},
  deleteExpense: (expenseId) => {},
  updateExpense: (expenseId, { description, amount, date }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state]
    case "SET":
      const inverted = action.payload.reverse()
      return inverted
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload)
    case "UPDATE":
      return state.map((expense) =>
        expense.id === action.payload.id
          ? { ...expense, ...action.payload.data }
          : expense
      )
    default:
      return state
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, [])

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData })
  }

  function setExpenses(expenses) {
    dispatch({ type: "SET", payload: expenses })
  }

  function deleteExpense(expenseId) {
    dispatch({ type: "DELETE", payload: expenseId })
  }

  function updateExpense(expenseId, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: expenseId, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
    setExpenses,
    addExpense,
    deleteExpense,
    updateExpense,
  }

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider
