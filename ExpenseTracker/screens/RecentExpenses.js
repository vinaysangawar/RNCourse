import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { useContext, useEffect, useState } from "react"
import { ExpensesContext } from "../store/expenses-context"
import { getDateMinusDays } from "../utils/date"
import { fetchExpenses } from "../utils/http"
import LoadingOverlay from "../ui/LoadingOverlay"
import ErrorOverlay from "../ui/ErrorOverlay"

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState()

  const expensesCtx = useContext(ExpensesContext)

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true)
      try {
        const expenses = await fetchExpenses()
        expensesCtx.setExpenses(expenses)
      } catch (error) {
        setError("Could not fetch expenses!")
      }
      setIsFetching(false)
    }

    getExpenses()
  }, [])

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const last7Days = getDateMinusDays(today, 7)

    return expense.date > last7Days
  })

  function errorHandler() {
    setError(null)
  }

  if (error) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 Days'
      fallbackText='No expenses registered for the last 7 days'
    />
  )
}

export default RecentExpenses
