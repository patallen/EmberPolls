import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  email: DS.attr('string'),
  polls: DS.hasMany('choice', {async: true, inverse: 'poll'})
});
