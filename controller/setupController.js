var mongoose = require ('mongoose');
var Todo = require('../models/Todos');

module.exports = function(app){
    app.get('/api/setup', function(req, res){

        var data =  [
            {
                username: 'Test',
                todo: 'Car wash',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'Test',
                todo: 'Do chores',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'Test',
                todo: 'Read',
                isDone: true,
                hasAttachment: false
            },
            {
                username: 'Test',
                todo: 'Watch Movie',
                isDone: true,
                hasAttachment: false
            }
        ];

        

        Todo.create(data, function(err, sampleTodo){
            if(err){
                console.log(err);
            }else{
                res.send(sampleTodo);
                console.log(sampleTodo);
            }
        });

       
    });
}