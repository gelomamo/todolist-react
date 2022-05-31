import React, { useState } from "react";
import "./InputForm.css";

const InputForm = (props) => {
	const [value, setValue] = useState();

	const onSave = () => {
		props.onSave(value);
	};

	const changeValue = (e) => {
		setValue(e.target.value);
	};

	return (
		<>
			<div className="input-form">
				<input
					type="text"
					className="form-control"
					placeholder={props.placeholder}
					onChange={changeValue}
				/>
				<button
					type="button"
					className="btn btn-primary"
					onClick={onSave}>
					Guardar
				</button>
			</div>
		</>
	);
};

export default InputForm;
