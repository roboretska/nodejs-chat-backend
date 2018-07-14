const router = require('express').Router();
const messageServices = require('../services/messageServices');

router.get('/:senderId/:receiverId', (req, res)=>{
    messageServices.getAllMessages(req.params.senderId, req.params.receiverId)
        .then(data => {
            res.status(200);
            res.json(data);
        })
        .catch( err =>{
            res.status(500);
            console.log(err);
            res.end();
        })
});

router.get('/:id', (req,res) =>{
   messageServices.getMessage(req.params.id)
       .then(data =>{
           res.status(200);
           res.json(data)
       })
       .catch( err =>{
           res.status(500);
           console.log(err);
           res.end();
       })
});

router.post('/:senderId/:receiverId', (req, res) =>{
    messageServices.writeNewMessage(req.params.senderId, req.params.receiverId, req.body)
        .then(data =>{
            res.status(200);
            res.json(data)
        })
        .catch( err =>{
        res.status(500);
        console.log(err);
        res.end();
    })
});

router.put('/:id', (req, res) =>{
    messageServices.editMessage(req.params.id, req.body)
        .then(data =>{
            res.status(200);
            res.json(data)
        })
        .catch( err => {
            res.status(500);
            console.log(err);
            res.end();
        })
});
router.delete('/:id', (req, res) => {
    messageServices.deleteMessage(req.params.id)
        .then(data =>{
            res.status(200);
            res.json(data)
        })
        .catch(err => {
            res.status(500);
            console.log(err);
            res.end();

        });
});

module.exports = router;