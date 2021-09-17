import { useReducer } from "react";

const initialInputState = {
	value: "",
	isTouched: false,
};

const inputReducer = (state, action) => {
	if (action.type === "INPUT") {
		return {
			value: action.value,
			isTouched: state.isTouched,
		};
	}

	if (action.type === "BLUR") {
		return {
			value: state.value,
			isTouched: true,
		};
	}

	if (action.type === "DROP_DOWN") {
		return { id: action.id, value: action.value, isValid: action.value.length > 1 };
	}

	if (action.type === "RESET") {
		return {
			value: "",
			isTouched: false,
		};
	}

	return initialInputState;
};

const useInput = (validateValue) => {
	const [inputState, dispatchInputState] = useReducer(inputReducer, initialInputState);

	const valueIsValid = validateValue(inputState.value);
	const hasError = !valueIsValid && inputState.isTouched;

	const inputValueChangeHandler = (e) => {
		dispatchInputState({
			type: "INPUT",
			value: e.target.value,
		});
	};

	const inputBlurHandler = (e) => {
		dispatchInputState({
			type: "BLUR",
		});
	};

	const dropdownHandler = (selection) => {
		dispatchInputState({
			type: "DROP_DOWN",
			value: selection.value,
			id: selection.id,
		});
	};

	const resetInputHandler = () => {
		dispatchInputState({
			type: "RESET",
		});
	};

	return {
		value: inputState.value,
		isValid: valueIsValid,
		hasError,
		selectionId: inputState.id,
		dropdownHandler,
		inputValueChangeHandler,
		inputBlurHandler,
		resetInputHandler,
	};
};

export default useInput;
