const skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    delete: deleteTodo,
};

function index(req, res){
    res.render('skills/index',{
        skills: skill.getAll(),
        title: 'All-Skills Details'

    });
}

function show(req, res){
    res.render('skills/show',{
        skill: skill.getOne(req.params.id),
        title: 'Skills Details'
    });
}

function newTodo(req, res) {
    res.render('skills/new', { title: 'New Skil' });
  }

function create(req, res){
    skill.create(req.body)
    res.redirect('/skills');
}

function deleteTodo(req, res){
    skill.deleteOne(req.params.id);
    res.redirect('/skills')
}



