// import React from 'react';
// import { formatCurrency } from '../../helpers/helpers';

// import styles from './BudgetAmount.module.css';

// const BudgetAmount = ({ className, remainingBudget, totalBudget }) => {
// 	const formattedRemainingBudget = formatCurrency(remainingBudget);
// 	const formattedTotalBudget = formatCurrency(totalBudget);

// 	return (
// 		<div className={className}>
// 			<h2>
// 				<span className={styles.remaining}>
// 					{' '}
// 					${formattedRemainingBudget.dollars}
// 					<span className={styles.cents}>.{formattedRemainingBudget.cents}</span> /
// 				</span>
// 				<span className={styles.total}>
// 					{' '}
// 					${formattedTotalBudget.dollars}
// 					<span className={styles.cents}>.{formattedTotalBudget.cents}</span>
// 				</span>
// 			</h2>
// 			{/* <h3>Balance</h3> */}
// 		</div>
// 	);
// };

// export default BudgetAmount;
