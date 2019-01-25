const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo'); 
const {User} = require('../server/models/user');

/*
Todo.remove({}).then((result) => {
    console.log(result);
});

//Todo.findOneAndRemove
//Todo.findByIdAndRemove


Todo.findOneAndRemove({_id: '5c4b229fdef9c08bbdc8656a'}).then((todo) => {

});
*/
Todo.findByIdAndRemove('5c4b229fdef9c08bbdc8656a').then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));

});