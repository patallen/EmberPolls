import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  choices: DS.hasMany('choice', {async: true, inverse: 'poll'})
});
