const router = require('express').Router();
const userServices = require('../services/userServices');


router.get('/', (req, res) => {
    userServices.findUsersList().
        then(data => {
            res.json(data);
            res.end();
        })
        .catch(err => {
            res.status(500);
            console.error(err);
            res.end()
        });

});
router.get('/:id', (req, res) => {
    userServices.findUser(req.params.id)
        .then(data => {
            console.log(data)
            res.json(data);
            res.end();
        })
        .catch(err => {
            res.status(500);
            console.error(err);
            res.end();
        });
});

router.post('/', (req, res) => {
    userServices.createUserProfile(req.body)
        .then(data=>{
            res.status(200);
            res.json(data);
        })
        .catch(err => {
            res.status(500);
            console.error(err);
            res.end();
        });
});

router.put('/:id', (req, res) => {
    console.log(req.body);
   userServices.updateUserProfile(req.params.id, req.body)
       .then(data => {
           res.status(200);
           res.json(data);
       })
       .catch(err => {
           res.status(500);
           console.error(err);
           res.end();
       });
});

router.delete('/:id', (req, res) => {
    userServices.deleteUser(req.params.id)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch(err => {
            res.status(500);
            console.error(err);
            res.end();
        });
});


router.get('/:id/chatmates', (req, res) => {
    console.log(req.params.id);
    userServices.getUserChatMates(req.params.id)
        .then(data => {

            console.log(data)

            const ChatMatesId = [];
            data.forEach(item =>{
                if(item.senderId===req.params.id){
                    ChatMatesId.push(item.receiverId)
                }else{
                    ChatMatesId.push(item.senderId)
                }
            })
            console.log(ChatMatesId)

const filter = require('../filter/Uniq')(ChatMatesId);

            console.log(filter);
            res.status(200);
            res.json(filter);
        })
        .catch(err => {
            res.status(500);
            console.error(err);
            res.end();
        });
});


module.exports = router;