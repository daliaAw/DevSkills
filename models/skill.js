const skills = [
    {id: 234, skill: 'HTML', done: true},
    {id: 235, skill: 'CSS', done: false},
    {id: 236, skill: 'JavaScript', done: true},
    {id: 236, skill: 'NodeJs', done: true},
    {id: 236, skill: 'MongoDB', done: false},
    
];

module.exports ={
    getAll,
    getOne,
    create,
    deleteOne,
};

function getAll(){
    return skills;
}

function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}
function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
}
function deleteOne(id){
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1)
}

