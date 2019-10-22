const express = require('express');
const router = express.Router();
const controller = require('../controllers/bibleController')

const xml2js = require('xml2js');

router.get('/bibles', function (req, res, next) {
    res.status(200).send({
        title: "Node Express API",
        version: "0.0.1"
    });
});

router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);


module.exports = router;