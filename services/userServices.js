const UserRepository = require("../repositories/UserRepository");
const MessageRepository = require('../repositories/MessageRepository')


module.exports = {
    findUsersList: ()=>{
         return UserRepository.getAll();
             // .then(data => console.log(data))
             // .catch( err => console.log(err));


    },
    findUser: id => {
        return UserRepository.getUser(id);
    },
    createUserProfile: data =>{
        return UserRepository.createUser(data);
    },
    updateUserProfile : (id, data)=>{
        return UserRepository.updateUserInfo(id, data);
    },
    deleteUser : id =>{
        return UserRepository.deleteUser(id);
    },
    getUserChatMates : id => {
        return MessageRepository.getUserChatmates(id);
    }
};


// module.exports = {
//     findAll: callback => {
//         UserRepository.getAll((err, data) => {
//             callback(null, data);
//         });
//     },
// findOne: (id, callback) => {
//     UserRepository.getById(id, (err, data) => {
//         callback(err, data);
//     });
// }