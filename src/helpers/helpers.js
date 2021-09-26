export const formatCurrency = (amount) => {
	const formattedAmount = amount.toFixed(2).toString().split('.');
	return {
		dollars: formattedAmount[0],
		cents: formattedAmount[1],
	};
};

export const loadFromLocalStorage = (key, setter, defaultValue) => {
	const data = localStorage.getItem('username');
	if (data) setter(data);
	else setter(defaultValue);
};

export const saveToLocalStorage = (key, value) => {
	if (typeof value !== 'string') {
		localStorage.setItem(key, JSON.stringify(value));
	} else {
		localStorage.setItem(key, value);
	}
};
