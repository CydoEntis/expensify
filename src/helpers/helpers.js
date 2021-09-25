export const formatCurrency = (amount) => {
	const formattedAmount = amount.toFixed(2).toString().split('.');
	return {
		dollars: formattedAmount[0],
		cents: formattedAmount[1],
	};
};
