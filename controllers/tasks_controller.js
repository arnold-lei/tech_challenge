var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/task/delete', function (req, res) {
    models.Task.destroy({
        where: {
            // person_id: req.params.person_id,
            id: button_id
        }
    }).then(function(){
        res.redirect('/');
    });
});

module.exports = router;
