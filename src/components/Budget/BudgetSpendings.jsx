import React from 'react';
import { formatCurrency } from '../../helpers/helpers';

const BudgetSpendings = ({ className, spendings }) => {
	const formattedSpendings = formatCurrency(spendings);

	return (
		<div>
			<h2 className={className}>
				You've spent
				<span>
					{' '}
					${formattedSpendings.dollars}
					<span>.{formattedSpendings.cents}</span>
				</span>
			</h2>
		</div>
	);
};

export default BudgetSpendings;
