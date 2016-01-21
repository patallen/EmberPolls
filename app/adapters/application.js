import DS from 'ember-data';

// We need to create a custom adapter for not-rest requests
export default DS.JSONAPIAdapter.extend({
	host: 'http://api.practiceapi.dev',
	headers: {
	    "Content-Type": "application/json"
	}
});
