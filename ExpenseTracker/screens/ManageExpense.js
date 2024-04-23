import { useContext, useLayoutEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import IconButton from "../ui/IconButton"
import { GlobalStyles } from "../constants/styles"
import { ExpensesContext } from "../store/expenses-context"
import ExpenseForm from "../components/ManageExpense/ExpenseForm"
import { deleteExpense, storeExpense, updateExpense } from "../utils/http"
import LoadingOverlay from "../ui/LoadingOverlay"
import ErrorOverlay from "../ui/ErrorOverlay"

function ManageExpense({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState()

  const expenseCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  const selectedExpense = expenseCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  )

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    })
  }, [navigation, isEditing])

  async function deleteExpenseHandler() {
    setIsSubmitting(true)
    try {
      await deleteExpense(editedExpenseId)
      expenseCtx.deleteExpense(editedExpenseId)
      navigation.goBack()
    } catch (error) {
      setError("Could not delete expense - please try again later!")
      setIsSubmitting(false)
    }
  }

  function cancelHandler() {
    navigation.goBack()
  }

  async function confirmHandler(expenseData) {
    setIsSubmitting(true)
    try {
      if (isEditing) {
        expenseCtx.updateExpense(editedExpenseId, expenseData)
        await updateExpense(editedExpenseId, expenseData)
      } else {
        const id = await storeExpense(expenseData)
        expenseCtx.addExpense({ ...expenseData, id })
      }
      navigation.goBack()
    } catch (error) {
      setError("Could not save expense - please try again later!")
      setIsSubmitting(false)
    }
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />
  }

  if (isSubmitting) {
    return <LoadingOverlay />
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name='trash'
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
})
