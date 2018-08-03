var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name:{
    type:String,
    required:false
  },
  house:{
    type:String,
    required:false
  },
  petType:{
    type:String,
    required:false
  },
  petName:{
    type:String,
    required:false
  },
  wandDetails:{
    wood:{
      type:String,
      required:false
    },
    core:{
      type:String,
      required:false
    },
    length:{
      type:String,
      required:false
    }
  },
  patronus:{
    type:String,
    required:false
  },
  imageUrl:{
    type:String,
    required:false
  },
  description:{
    type:String,
    required:false
  }
});

var Student = module.exports = mongoose.model('Student', studentSchema, 'Students');

module.exports.getStudents = function(callback, limit){
  Student.find(callback).limit(limit);
};

module.exports.getStudentById = function(id, callback){
  Student.findById(id, callback);
};

module.exports.addStudent = function(student, callback){
  Student.create(student, callback);
};

module.exports.updateStudent = function(id, updatedStudent, options, callback){
  var query = {_id:id};
  var updatedStudent1 = {
    name:updatedStudent.name,
    house:updatedStudent.house,
    petType:updatedStudent.petType,
    petName:updatedStudent.petName,
    wandDetails:{
      wood:updatedStudent.wandDetails.wood,
      core:updatedStudent.wandDetails.core,
      length:updatedStudent.wandDetails.length
    },
    patronus:updatedStudent.patronus,
    imageUrl:updatedStudent.imageUrl,
    description:updatedStudent.description
  };
  Student.findOneAndUpdate(query, updatedStudent1, options, callback);
};

module.exports.removeStudent = function(id, callback){
  var query = {_id:id};
  Student.remove(query, callback);
};
