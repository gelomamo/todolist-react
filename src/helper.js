import { config } from "./config.js";

const request = ({ param = null, method, body = null }) => {
	let url = `${config.hostname}/apis/fake/todos/user`;
	if (param) url += `/${param}`;

	return fetch(url, {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		body: body ? JSON.stringify(body) : null,
	})
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.error(err);
		});
};

export default {
	request,
};
