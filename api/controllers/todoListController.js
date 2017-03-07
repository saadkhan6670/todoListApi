'use strict';

var mongoose = require ('mongoose');

var Task = mongoose.model('Tasks');



exports.list_all_tasks = function (req, res){
    Task.find({}, function (err, task) {
        if (err)
            res.send(err);
            res.json(task);
        
    });
};

exports.create_a_task = function (req, res){


};

exports.read_a_task = function (req, res){


};

exports.read_a_task = function (req, res){


};

exports.delete_a_task = function (req, res){


};