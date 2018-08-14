var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/witchesAndWizardsDB');
var db = mongoose.connection;

Student = require('./models/student');

app.get('/', function(req, res){
  res.send('Please use - /api/witchesAndWizards');
});

app.get('/api/witchesAndWizards', function(req, res){
  Student.getStudents(function(err, students){
    if(err){
      throw err;
    }
    res.json(students);
  });
});

app.post('/api/witchesAndWizards', function(req, res){
  Student.addStudent(req.body, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.put('/api/witchesAndWizards/:_id', function(req, res){
  Student.updateStudent(req.params._id, req.body, {}, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.delete('/api/witchesAndWizards/:_id', function(req, res){
  Student.removeStudent(req.params._id, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.get('/api/witchesAndWizards/:_id', function(req, res){
  Student.getStudentById(req.params._id, function(err, student){
    if(err){
      throw err;
    }
    res.json(student);
  });
});

app.listen(3000);
console.log('Running on 3000');
