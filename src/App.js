import React, { useState } from "react";
import styles from "./App.module.css";

import ExpensesContextProvider from "./contexts/ExpensesProvider";

import Budget from "./components/Budget/Budget";
import Expenses from "./components/Expenses/Expenses.jsx";
import AddExpenseBtn from "./components/Navigation/AddExpenseBtn";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import UserProvider from "./contexts/UserProvider";

function App() {
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const toggleExpenseFormHandler = () => {
		setShowExpenseForm((prevState) => {
			return !prevState;
		});
	};

	return (
		<ExpensesContextProvider>
			<UserProvider>
				<div className={styles.App}>
					<div className={styles.wrapper}>
						{showExpenseForm && <ExpenseForm onClose={toggleExpenseFormHandler} />}
						<Budget />
						<Expenses />
						<AddExpenseBtn onToggleForm={toggleExpenseFormHandler} />
					</div>
				</div>
			</UserProvider>
		</ExpensesContextProvider>
	);
}

export default App;
