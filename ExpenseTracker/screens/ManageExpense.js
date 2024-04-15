import { useContext, useLayoutEffect } from "react"
import { StyleSheet, View } from "react-native"
import IconButton from "../ui/IconButton"
import { GlobalStyles } from "../constants/styles"
import Button from "../ui/Button"
import { ExpensesContext } from "../store/expenses-context"

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext)
  const editedExpenseId = route.params?.expenseId
  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    })
  }, [navigation, isEditing])

  function deleteExpense() {
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack()
  }

  function cancelHandler() {
    navigation.goBack()
  }

  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(editedExpenseId, {
        description: "Updated Expense",
        amount: 29.99,
        date: new Date(),
      })
    } else {
      expenseCtx.addExpense({
        description: "New Expense",
        amount: 100,
        date: new Date(),
      })
    }
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            name='trash'
            size={24}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpense}
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
})
