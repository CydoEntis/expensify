import { createContext } from "react";

const UserContext = createContext({
	username: "",
	budget: "",
	editUsername: (value) => {},
	editBudget: (value) => {},
	login: () => {},
	logout: () => {},
});

export default UserContext;
