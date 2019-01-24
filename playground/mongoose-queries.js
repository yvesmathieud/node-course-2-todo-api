const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo'); 
const {User} = require('./../server/models/user');

var id = '5c48adb1f533d7a82046efe6';

/*
var id = '5c49dfc76d88af441a59938911';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', JSON.stringify(todos, undefined, 2));
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', JSON.stringify(todo, undefined, 2));
});

Todo.findById(id).then((todo) => {
    if (!todo) {
        return console.log('Id not found');
    }
    console.log('Todo By Id', JSON.stringify(todo, undefined, 2));
}).catch((e) => console.log(e));
*/

User.findById(id).then((user) => {
    if (!user) {
        return console.log('Id not found');
    }
    console.log('User By Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));