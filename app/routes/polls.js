import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		let polls = this.store.findAll('poll');
		return polls;
	}
});