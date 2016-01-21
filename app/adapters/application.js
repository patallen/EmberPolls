import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://api.practiceapi.dev',
	headers: {
        'Content-type': 'application/json'
	}
});
