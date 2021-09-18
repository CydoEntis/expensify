import React from "react";
import Modal from "../UI/Modals/Modal";
import Button from "../UI/Buttons/Button";

import styles from "./ProfileSettings.module.css";

const ProfileSettings = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<h1>Settings</h1>
			<form>
				{/* {selectionHasError && <p>Please select a type.</p>} */}
				<input
					type="text"
					placeholder="Name"
					// onChange={}
					// onBlur={}
					// value={}
				/>
				{/* {nameHasError && <p>Please don't leave name empty.</p>} */}
				<input
					type="text"
					placeholder="Cost"
					// onChange={}
					// onBlur={}
					// value={}
				/>
				<div>
					<Button type="button" onClick={props.onClose}>
						Cancel
					</Button>
					<Button type="submit">Add Expense</Button>
				</div>
			</form>
		</Modal>
	);
};

export default ProfileSettings;
