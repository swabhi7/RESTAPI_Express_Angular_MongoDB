var mongoose = require('mongoose');

var spellSchema = mongoose.Schema({
  name:{
    type: String,
    required: false
  },
  whatItDoes:{
    type: String,
    required: false
  }
});

var Spell = module.exports = mongoose.model('Spell', spellSchema, 'Spells');

module.exports.getSpells = function(callback, limit){
  Spell.find(callback).limit(limit);
};

module.exports.getSpellById = function(id, callback){
  Spell.findById(id, callback);
};

module.exports.addSpell = function(newSpell, callback){
  Spell.create(newSpell, callback);
};

module.exports.updateSpell = function(id, updatedSpell, options, callback){
  var updatedSpell1 = {
    name: updatedSpell.name,
    whatItDoes: updatedSpell.whatItDoes
  };

  Spell.findOneAndUpdate({_id:id}, updatedSpell1, options, callback);
};

module.exports.removeSpell = function(id, callback){
  Spell.remove({_id:id}, callback);
};
