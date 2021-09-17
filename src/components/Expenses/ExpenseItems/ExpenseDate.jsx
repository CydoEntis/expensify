import React from "react";

const ExpenseDate = ({ className, date }) => {
	const month = date.toLocaleString("en-US", { month: "long" });
	const day = date.toLocaleString("en-US", { day: "2-digit" });
	const year = date.getFullYear();

	return (
		<p className={className}>
			{month} {day}, {year}
		</p>
	);
};

export default ExpenseDate;
