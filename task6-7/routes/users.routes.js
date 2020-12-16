const express = require('express');

const router = express.Router();
const controller = require('../controller/users.controller');
const auth = require('../middleware/auth.middleware');
const multerMiddleware = require('../middleware/multer.middleware');
router
    // // .get('/',controller.get)
    // .get('/:id',controller.getId)
    // .delete('/:id',controller.deleteUser)
    // .put('/:id',controller.rename)
//
    .post('/',multerMiddleware,controller.addUser)
    .post('/login',controller.login)
    .get('/',auth,controller.get)
    .get('/me',auth,controller.me)
    .put('/me',auth,multerMiddleware,controller.update);


module.exports = router;