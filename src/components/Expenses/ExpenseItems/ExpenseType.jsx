import React from "react";

const ExpenseType = ({ className, type }) => {
	return <h3 className={className}>{type}</h3>;
};

export default ExpenseType;
