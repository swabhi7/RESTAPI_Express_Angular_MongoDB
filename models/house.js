var mongoose = require('mongoose');

var houseSchema = mongoose.Schema({
  name:{
    type:String,
    required:false
  },
  creator:{
    type:String,
    required:false
  },
  traits:{
    type:String,
    required:false
  },
  location:{
    type:String,
    required:false
  },
  access:{
    type:String,
    required:false
  },
  symbol:{
    type:String,
    required:false
  },
  colors:{
    type:String,
    required:false
  },
  ghost:{
    type:String,
    required:false
  },
  head:{
    type:String,
    required:false
  },
  element:{
    type:String,
    required:false
  }
});

var House = module.exports = mongoose.model('House', houseSchema, 'Houses');

module.exports.getHouses = function(callback, limit){
  House.find(callback).limit(limit);
};

module.exports.getHouseById = function(id, callback){
  House.findById(id, callback);
};

module.exports.updateHouse = function(id, updatedHouse, options, callback){
  House.findOneAndUpdate({_id:id}, updatedHouse, options, callback);
};

module.exports.addHouse = function(newHouse, callback){
  House.create(newHouse, callback);
};

module.exports.removeHouse = function(id, callback){
  House.remove({_id:id}, callback);
};
