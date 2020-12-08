const express = require('express');

const router = express.Router();
const controller = require('../controller/users.controller');

router
    .get('/',controller.get)
    .get('/:id',controller.getId)
    .delete('/:id',controller.deleteUser)
    .post('/',controller.add)
    .put('/:id',controller.rename);


module.exports = router;