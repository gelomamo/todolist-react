import React from "react";
import "./Item.css";

const Item = (props) => {
	return (
		<>
			<div className="item-container">
				<button
					type="button"
					className="btn btn-danger"
					onClick={() => props.onRemove(props.label)}>
					x
				</button>
				<label onClick={() => props.updateViewTask(props.label)}>
					{props.label}
				</label>
			</div>
		</>
	);
};

export default Item;
