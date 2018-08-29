var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(express.static(__dirname+'/client'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/witchesAndWizardsDB');
var db = mongoose.connection;

Student = require('./models/student');
Teacher = require('./models/teacher');

app.get('/', function(req, res){
  res.send('Please use - /api/witchesAndWizards');
});

app.get('/api/witchesAndWizards', function(req, res){
  var everyone = {};
  Student.getStudents(function(err, students){
    if(err){
      throw err;
    }
    //console.log(students);
    everyone.students = students;
  });
  Teacher.getTeachers(function(err, teachers){
    if(err){
      throw err;
    }
    //console.log(teachers);
    everyone.teachers = teachers;
    //console.log(everyone);
    //res.json(everyone);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(everyone, null, 3));
  });


});

app.post('/api/witchesAndWizards', function(req, res){
  if(req.body.petType){
    Student.addStudent(req.body, function(err, student){
      if(err){
        throw err;
      }
      res.json(student);
      console.log('Student added');
    });
  }
  else{
    Teacher.addTeacher(req.body, function(err, teacher){
      if(err){
        throw err;
      }
      res.json(teacher);
      console.log('Teacher added');
    });
  }

});

app.put('/api/witchesAndWizards/:_id', function(req, res){
  if(req.body.petType){
    Student.updateStudent(req.params._id, req.body, {}, function(err, student){
      if(err){
        throw err;
      }
      res.json(student);
      console.log('student updated');
    });
  }
  else{
    Teacher.updateTeacher(req.params._id, req.body, {}, function(err, teacher){
      if(err){
        throw err;
      }
      res.json(teacher);
      console.log('teacher updated');
    });
  }

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

var Spell = require('./models/spell');

app.get('/api/spells', function(req, res){
  Spell.getSpells(function(err, spells){
    if(err){
      throw err;
    }
    res.json(spells);
  });
});

app.get('/api/spells/:_id', function(req, res){
  Spell.getSpellById(req.params._id, function(err, spell){
    if(err){
      throw err;
    }
    res.json(spell);
  });
});

app.post('/api/spells', function(req, res){
  Spell.addSpell(req.body, function(err, spell){
    if(err){
      throw err;
    }
    res.json(spell);
  });
});

app.put('/api/spells/:_id', function(req, res){
  Spell.updateSpell(req.params._id, req.body, {}, function(err, spell){
    if(err){
      throw err;
    }
    res.json(spell);
  });
});

app.delete('/api/spells/:_id', function(req, res){
  Spell.removeSpell(req.params._id, function(err, spell){
    if(err){
      throw err;
    }
    res.json(spell);
  });
});

var House = require('./models/house');

app.get('/api/houses', function(req, res){
  House.getHouses(function(err, houses){
    if(err){
      throw err;
    }
    res.json(houses);
  });
});

app.get('/api/houses/:id', function(req, res){
  House.getHouseById(req.params.id, function(err, house){
    if(err){
      throw err;
    }
    res.json(house);
  });
});

app.post('/api/houses', function(req, res){
  House.addHouse(req.body, function(err, house){
    if(err){
      throw err;
    }
    res.json(house);
  });
});

app.put('/api/houses/:id', function(req, res){
  House.updateHouse(req.params.id, req.body, function(err, house){
    if(err){
      throw err;
    }
    res.json(house);
  });
});

app.delete('/api/houses/:id', function(req, res){
  House.removeHouse(req.params.id, function(err, house){
    if(err){
      throw err;
    }
    res.json(house);
  });
});



app.listen(3000);
console.log('Running on 3000');
