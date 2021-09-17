import React from "react";
import ReactDOM from "react-dom";
import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = ({ children, onClose }) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={onClose} />, document.getElementById("overlays"))}
			{ReactDOM.createPortal(
				<ModalOverlay>{children}</ModalOverlay>,
				document.getElementById("overlays")
			)}
		</>
	);
};

export default Modal;
