import React, { useContext } from 'react';

import BudgetAmount from './BudgetAmount';
import UserContext from '../../contexts/UserContext';
import BudgetSpendings from './BudgetSpendings';

import styles from './Budget.module.css';

const Budget = () => {
	const userCtx = useContext(UserContext);

	let totalBudget = parseInt(userCtx.income);

	let remainingBudget = totalBudget;

	for (let expense of userCtx.monthlyExpenses) {
		remainingBudget -= expense.cost;
	}

	let spendings = 0;
	for (let expense of userCtx.monthlyExpenses) {
		spendings += parseFloat(expense.cost);
	}

	return (
		<section className={styles.budget}>
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
