const commonDetails = {

    tags: ['User'],
    security: [
        {
            ApiKeyAuth: []
        }
    ],
    responses: {}
}

const addUser = {
    summary: "Create User",
    operationId: 'addUser',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    },
                    "example": {
                        "name": "Ajay Yadav",
                        "email": "ajay.yadav@gmail.com",
                        "password": "0000"
                    }
                }
            }
        }
    },
    ...commonDetails
}

const updateUserById = {
    summary: "Update User",
    operationId: 'updateUser',
    parameters: [
        {
            "in": "path",
            "name": "_id",
            "type": "string",
            "required": true,
            "description": "The user unique object id"
        }
    ],
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    "type": "object",
                    "properties": {
                        "name": {
                            "type": "string"
                        },
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    },
                    "example": {
                        "name": "ABC",
                        "email": "abc@abc.com",
                        "password": "1a2b3c4d"
                    }
                }
            }
        }
    },
    ...commonDetails
}

const getAllUsers = {
    summary: "Get All User",
    operationId: 'getAllUsers',
    ...commonDetails
}

const removeUserById = {
    summary: "Remove User By ID",
    operationId: 'RemoveUser',
    parameters: [
        {
            "in": "path",
            "name": "_id",
            "type": "string",
            "required": true,
            "description": "The question unique object id"
        }
    ],
    ...commonDetails
}

const getUserById = {
    summary: "Get User By ID",
    operationId: 'getSingleUserDetail',
    parameters: [
        {
            "in": "path",
            "name": "_id",
            "type": "string",
            "required": true,
            "description": "The user unique object id"
        }
    ],
    ...commonDetails
}

const userRoutes = {
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

module.exports = userRoutes;