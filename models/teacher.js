var mongoose = require('mongoose');

var teacherSchema = mongoose.Schema({
  name:{
    type:String,
    required:false
  },
  house:{
    type:String,
    required:false
  },
  teaches:{
    type:String,
    required:false
  },
  description:{
    type:String,
    required:false
  },
  patronus:{
    type:String,
    required:false
  }
});

var Teacher = module.exports = mongoose.model('Teacher', teacherSchema, 'Teachers');

module.exports.getTeachers = function(callback, limit){
  Teacher.find(callback).limit(limit);
};

module.exports.getTeacherById = function(id, callback){
  Teacher.findById(id, callback);
};

module.exports.addTeacher = function(newTeacher, callback){
  Teacher.create(newTeacher, callback);
};

module.exports.updateTeacher = function(id, updatedTeacher, options, callback){
  Teacher.findOneAndUpdate({_id:id}, updatedTeacher, options, callback);
};

module.exports.removeTeacher = function(id, callback){
  Teacher.remove({_id:id}, callback);
};
