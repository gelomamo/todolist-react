import React, { useState, useEffect } from "react";

import { UserForm } from "../UserForm/UserForm.jsx";
import TaskForm from "../TaskForm/TaskForm.jsx";
import userApi from "../../../api/user.api.js";

const Home = () => {
	const [users, setUsers] = useState([]);
	const [tasks, setTasks] = useState([]);

	const addUser = (username) => {
		userApi.create(username).then((_) => {
			const auxUsers = users.concat(username);
			setUsers(auxUsers);
		});
	};
	const removeUser = (user) => {
		userApi.remove(user).then((_) => {
			const auxUsers = users.filter((username) => {
				if (username !== user) return username;
			});
			setUsers(auxUsers);
		});
	};

	useEffect(() => {
		userApi.list().then((data) => {
			setUsers(data);
		});
	}, [setUsers]);

	const updateViewTask = (username) => {
		userApi.get(username).then((data) => {
			if (data?.length) {
				setTasks(data);
				console.log({ data });
			}
		});
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<UserForm
							users={users}
							addUser={addUser}
							removeUser={removeUser}
							updateViewTask={updateViewTask}
						/>
					</div>
					<div className="col-md-8">
						<TaskForm tasks={tasks} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
