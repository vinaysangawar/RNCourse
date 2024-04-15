import { createContext, useReducer } from "react"

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    category: "Home",
  },
  {
    id: "e2",
    description: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    category: "Entertainment",
  },
  {
    id: "e3",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    category: "Car",
  },
  {
    id: "e4",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    category: "Home",
  },
  {
    id: "e5",
    description: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    category: "Home",
  },
  {
    id: "e6",
    description: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    category: "Entertainment",
  },
  {
    id: "e7",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    category: "Car",
  },
  {
    id: "e8",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    category: "Home",
  },
  {
    id: "e9",
    description: "Toilet Paper",
    amount: 95.12,
    date: new Date(2020, 7, 14),
    category: "Home",
  },
  {
    id: "e10",
    description: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    category: "Entertainment",
  },
  {
    id: "e11",
    description: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    category: "Car",
  },
  {
    id: "e12",
    description: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    category: "Home",
  },
  {
    id: "e13",
    description: "iPhone 12",
    amount: 900,
    date: new Date(2024, 4, 10),
    category: "Home",
  },
]

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (expenseId) => {},
  updateExpense: (expenseId, { description, amount, date }) => {},
})

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString()
      return [{ ...action.payload, id }, ...state]
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES)

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData })
  }

  function deleteExpense(expenseId) {
    dispatch({ type: "DELETE", payload: expenseId })
  }

  function updateExpense(expenseId, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: expenseId, data: expenseData } })
  }

  const value = {
    expenses: expensesState,
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
