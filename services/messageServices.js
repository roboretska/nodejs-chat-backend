const MessageRepository = require('../repositories/MessageRepository')

module.exports = {
    getAllMessages: (senderId, receiverId)=>{
        return MessageRepository.getAllMessages(senderId, receiverId);
        // .then(data => console.log(data))
        // .catch( err => console.log(err));


    },
    getMessage: id => {
        return MessageRepository.getMessage(id);
    },
    writeNewMessage: (senderId, receiverId, data) =>{
        return MessageRepository.writeNewMessage(senderId, receiverId, data);
    },
    editMessage : (id, data)=>{
        return MessageRepository.editMessage(id, data);
    },
    deleteMessage : id =>{
        return MessageRepository.deleteMessage(id);
    }
};