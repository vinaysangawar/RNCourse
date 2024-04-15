import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../store/expenses-context"
import { getDateMinusDays } from "../utils/date"

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const last7Days = getDateMinusDays(today, 7)

    return expense.date > last7Days
  })

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod='Last 7 Days'
      fallbackText='No expenses registered for the last 7 days'
    />
  )
}

export default RecentExpenses
