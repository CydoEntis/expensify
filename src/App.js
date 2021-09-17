import React, { useState } from "react";
import styles from "./App.module.css";

import ExpensesContextProvider from "./contexts/ExpensesProvider";

import Budget from "./components/Budget/Budget";
import ExpensesFilter from "./components/Filter/ExpensesFilter.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import AddExpenseBtn from "./components/Navigation/AddExpenseBtn";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

function App() {
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const toggleExpenseFormHandler = () => {
		setShowExpenseForm((prevState) => {
			return !prevState;
		});
	};

	return (
		<ExpensesContextProvider>
			<div className={styles.App}>
				<div className={styles.wrapper}>
					{showExpenseForm && <ExpenseForm onClose={toggleExpenseFormHandler} />}
					<AddExpenseBtn onToggleForm={toggleExpenseFormHandler} />
					<div className={styles["top-wrapper"]}>
						<Budget />
						<ExpensesFilter />
					</div>
					<div className={styles["bottom-wrapper"]}>
						<Expenses />
					</div>
				</div>
			</div>
		</ExpensesContextProvider>
	);
}

export default App;
