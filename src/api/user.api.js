import helper from "../helper.js";

const userApi = {
	create: (username) => {
		return helper.request({
			method: "POST",
			param: username,
			body: [],
		});
	},
	list: () => {
		return helper.request({
			method: "GET",
		});
	},
	get: (username) => {
		const obj = {
			method: "GET",
			param: username,
		};
		return helper.request(obj);
	},
	remove: (username) => {
		return helper.request({
			method: "DELETE",
			param: username,
		});
	},
};

export default userApi;
