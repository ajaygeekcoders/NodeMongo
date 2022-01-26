const AuthRoutes = require('./auth.swagger');
const UserRoutes = require('./user.swagger');

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
            url: 'http://localhost:4000/api/',
            description: 'Local server'
        },
        {
            url: 'http://127.0.0.1/api/v1',
            description: 'DEV ENV'
        }
    ],
    paths: {
        ...AuthRoutes,
        ...UserRoutes
    }
}

module.exports = swaggerDocument;