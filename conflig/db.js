const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    skill: String,
    done: Boolean
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;