import { createContext } from "react";

const UserContext = createContext({
	expenses: [],
	editUsername: (value) => {},
	editBudget: (value) => {},
	login: () => {},
	logout: () => {},
});

export default UserContext;
