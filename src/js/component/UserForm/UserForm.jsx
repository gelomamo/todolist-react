import React from "react";
import InputForm from "../InputForm/InputForm.jsx";
import Item from "../Item/Item.jsx";

export const UserForm = (props) => {
	return (
		<>
			<InputForm onSave={props.addUser} />
			<div style={{ marginTop: "30px" }}>
				{props.users.map((username, i) => {
					return (
						<Item
							key={i}
							label={username}
							onRemove={props.removeUser}
							updateViewTask={props.updateViewTask}
						/>
					);
				})}
			</div>
		</>
	);
};
