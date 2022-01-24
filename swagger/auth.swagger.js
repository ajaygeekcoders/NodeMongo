const commonDetail = {
    tags: ['Auth'],
    responses: {}
}


/**
 * @USER_AUTH
 */

const login = {
    summary: "Login",
    operationId: 'Login',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    "type": "object",
                    "properties": {
                        "email": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    },
                    "example": {
                        "email": "ajay.yadav@gmail.com",
                        "password": "0000"
                    }

                }
            }
        }
    },
    ...commonDetail
}

const forgotPassword = {
    summary: "Forgot Password",
    operationId: 'ForgotPassword',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    "type": "object",
                    "properties": {
                        "email": {
                            "type": "string"
                        },
                    },
                    "example": {
                        "email": "ajay.yadav@gmail.com",
                    }

                }
            }
        }
    },
    ...commonDetail
}

const resetPassword = {
    summary: "Reset Password",
    operationId: 'ResetPassword',
    requestBody: {
        content: {
            'application/json': {
                schema: {
                    "type": "object",
                    "properties": {
                        "email": {
                            "type": "string"
                        },
                        "resetCode": {
                            "type": "string"
                        },
                        "password": {
                            "type": "string"
                        }
                    },
                    "example": {
                        "email": "user2@gmail.com",
                        "resetCode": "1111",
                        "password": "2a3b4c5d"
                    }
                }
            }
        }
    },
    ...commonDetail
}



module.exports = {
    login,
    forgotPassword,
    resetPassword
}