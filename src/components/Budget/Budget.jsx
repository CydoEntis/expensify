import React, { useContext } from 'react';

import BudgetAmount from './BudgetAmount';
import ExpensesContext from '../../contexts/ExpensesContext';
import ExpensesFilter from '../Filter/ExpensesFilter';
import UserContext from '../../contexts/UserContext';

import styles from './Budget.module.css';
import BudgetSpendings from './BudgetSpendings';

const Budget = () => {
	const expensesCtx = useContext(ExpensesContext);
	const userCtx = useContext(UserContext);

	let totalBudget;

	if (userCtx.budget.length === 0) {
		totalBudget = 0;
	} else {
		totalBudget = parseInt(userCtx.budget);
	}

	let remainingBudget = totalBudget;

	for (let expense of expensesCtx.expenses) {
		remainingBudget -= expense.cost;
	}

	let spendings = 0;
	for (let expense of expensesCtx.expenses) {
		spendings += parseFloat(expense.cost);
	}

	// spendings = parseInt(spendings);

	return (
		<section className={styles.budget}>
			<ExpensesFilter />
			<BudgetSpendings className={styles['budget--spendings']} spendings={spendings} />
			<BudgetAmount
				className={styles['budget--balance']}
				remainingBudget={remainingBudget}
				totalBudget={totalBudget}
			/>
		</section>
	);
};

export default Budget;
