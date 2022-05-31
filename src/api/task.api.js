import helper from "../helper.js"

const taskApi = {
    update: (username, body) => {
    return helper.request({
            method: 'PUT',
            param: username,
            body,
        })
    },
}

export default taskApi;