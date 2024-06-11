import ExpenseOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpenseOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fullbackText="no registered expenses found!"
    />
  );
}

export default AllExpenses;
