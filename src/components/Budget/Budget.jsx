import React, { useContext } from 'react';

import BudgetAmount from './BudgetAmount';
import UserContext from '../../contexts/UserContext';
import BudgetSpendings from './BudgetSpendings';

import styles from './Budget.module.css';

const Budget = ({ monthValue, yearValue }) => {
	const userCtx = useContext(UserContext);

	let totalBudget = parseInt(userCtx.monthlyBudget);

	let remainingBudget = totalBudget;

	for (let expense of userCtx.monthlyExpenses) {
		const splitDate = expense.date.split(' ');
		const month = splitDate[0];
		const year = splitDate[2];
		if (month === monthValue && year === yearValue) {
			remainingBudget -= expense.cost;
		}
	}

	let spendings = 0;
	for (let expense of userCtx.monthlyExpenses) {
		const splitDate = expense.date.split(' ');
		const month = splitDate[0];
		const year = splitDate[2];
		if (month === monthValue && year === yearValue) {
			spendings += parseFloat(expense.cost);
		}
	}

	return (
		<section className={styles.budget}>
			<div className={styles['budget--container']}>
				<BudgetSpendings className={styles['budget--spendings']} spendings={spendings} />
				<BudgetAmount
					className={styles['budget--balance']}
					remainingBudget={remainingBudget}
					totalBudget={totalBudget}
				/>
			</div>
		</section>
	);
};

export default Budget;
