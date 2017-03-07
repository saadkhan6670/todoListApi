'use strict';

var mongoose = require ('mongoose ');
var Schema = mongoose.schema;

var TaskSchema = new Schema({ // this is the scope of new object Schema

// name object with in the object
    name : {
        type: String,
        Required: 'Kindly enter the name of the task'
    },
    // date object that picks date

    Created_date: {
        type : Date,
        default: Date.now()
    },

    Status: {
        type: [{
            type : String,
            enum : ['pending', 'ongoing', 'completed']
        }],
        defualt : ['pending']
    }
});

module.exports = mongoose.model('Task',TaskSchema);
