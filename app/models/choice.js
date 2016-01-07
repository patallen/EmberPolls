import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  votes: DS.attr('number'),
  poll: DS.belongsTo('poll', {async: true, inverse: 'choices'})
});
