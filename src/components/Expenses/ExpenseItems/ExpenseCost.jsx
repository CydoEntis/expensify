import React from "react";

const ExpenseCost = ({ className, amount }) => {
	return <h2 className={className}>-${amount}</h2>;
};

export default ExpenseCost;
