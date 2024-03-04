var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/skills')

//All actual paths start with /todos
//GET /skills
router.get('/', todosCtrl.index);
//GET /skills/new
router.get('/new', todosCtrl.new)
//GET /skills/:id
router.get('/:id', todosCtrl.show);

//Post /skills
router.post('/', todosCtrl.create);
//DELETE /skills/:id
router.delete('/:id', todosCtrl.delete);

module.exports = router;
