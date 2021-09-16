import "./App.css";
import React from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpensesContextProvider from "./contexts/ExpensesProvider";

function App() {
	return (
		<ExpensesContextProvider>
			<div className="App">
				<ExpenseForm />
			</div>
		</ExpensesContextProvider>
	);
}

export default App;
