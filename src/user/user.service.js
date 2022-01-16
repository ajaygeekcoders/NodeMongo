
const UserModel = require('./user.model');

class UserService {

    addUser(params){
        let user = new UserModel(params);
        return user.save();
    }

}

module.exports = new UserService();