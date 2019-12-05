'use strict'

var express = require('express');
var ArticleConroller = require('../controllers/article');

var router = express.Router();

router.post('/datos-curso', ArticleConroller.datosCurso);
router.get('/test-de-controlador', ArticleConroller.test);

module.exports = router;