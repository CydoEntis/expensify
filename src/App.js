import React, { useState } from 'react';
import styles from './App.module.css';

import ExpensesContextProvider from './contexts/ExpensesProvider';

import Budget from './components/Budget/Budget';
import Expenses from './components/Expenses/Expenses.jsx';
import AddExpenseBtn from './components/Expenses/AddExpenseBtn';
import ExpenseForm from './components/ExpenseForm/ExpenseForm';
import UserProvider from './contexts/UserProvider';
import NavBar from './components/Nav/NavBar';
import useInput from './hooks/use-input';

const isNotEmpty = (value) => value.trim() !== '';

function App() {
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const {
		value: selectionValue,
		selectionId,
		dropdownHandler: selectionChangeHandler,
		inputBlurHandler: selectionBlurHandler,
	} = useInput(isNotEmpty);

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
					<Budget
						value={selectionValue}
						id={selectionId}
						onChange={selectionChangeHandler}
						onBlur={selectionBlurHandler}
					/>
					<Expenses filterMonth={selectionValue} />
					{showExpenseForm && <ExpenseForm onClose={toggleExpenseFormHandler} />}
					<AddExpenseBtn onToggleForm={toggleExpenseFormHandler} />
				</div>
			</UserProvider>
		</ExpensesContextProvider>
	);
}

export default App;
