const users = []

const { v4: uuidv4 } = require('uuid')

module.exports = {
    getUsers: () => {
        return users
    },
    storeUser: (name, username, password) => {
        users.push({
            id: uuidv4(),
            name,
            username,
            password
        })
    },
    deleteUser: (_id) => {
        userIndex = users.findIndex((user) => user.id == _id)

        users.splice(userIndex, 1);
    }
}