const { login, forgotPassword, resetPassword } = require('./auth.swagger');
const { addUser, updateUserById, getAllUsers, getUserById, removeUserById  } = require('./user.swagger');

const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'APIs Document',
        description: 'Node Mongo Api Documentation',
        termsOfService: '',
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    components: {
        securitySchemes: {
            ApiKeyAuth: {
                type: 'apiKey',
                in: 'header',
                name: 'authorization'
            }
        }
    },
    servers: [
        {
            url: 'http://localhost:4001/api/',
            description: 'Local server'
        },
        {
            url: 'http://127.0.0.1/api/v1',
            description: 'DEV ENV'
        }
    ],
    paths: {
        "/auth/login": {
            post: login
        },
        "/auth/forgot.password": {
            post: forgotPassword
        },
        "/auth/reset.password": {
            post: resetPassword
        },

        "/user/": {
            post: addUser,
            get: getAllUsers,
        },
        "/user/{_id}":{
            get: getUserById,
            put: updateUserById,
            delete: removeUserById
        }
    }
}

module.exports = swaggerDocument;