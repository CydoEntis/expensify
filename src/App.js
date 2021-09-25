import React, { useState } from 'react';
import styles from './App.module.css';

import ExpensesContextProvider from './contexts/ExpensesProvider';

import Budget from './components/Budget/Budget';
import Expenses from './components/Expenses/Expenses.jsx';
import AddExpenseBtn from './components/Expenses/AddExpenseBtn';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import UserProvider from './contexts/UserProvider';
import NavBar from './components/Nav/NavBar';

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
					<NavBar />
					<Budget />
					<Expenses />
					{showExpenseForm && <ExpenseForm onClose={toggleExpenseFormHandler} />}
					<AddExpenseBtn onToggleForm={toggleExpenseFormHandler} />
				</div>
			</UserProvider>
		</ExpensesContextProvider>
	);
}

export default App;
