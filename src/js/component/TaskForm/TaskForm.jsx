import React from "react";

const TaskForm = (props) => {
	console.log({ tasks: props.tasks });
	if (props.tasks?.length > 0) {
		return (
			<>
				{props.tasks.map((task) => {
					return (
						<div>
							<h1>label: {task.label}</h1>
							<h3>
								done: {task.done === true ? "true" : "false"}
							</h3>
						</div>
					);
				})}
			</>
		);
	}

	return (
		<>
			<h1>Empty.</h1>
		</>
	);
};

export default TaskForm;
