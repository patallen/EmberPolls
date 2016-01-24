import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
	host: 'http://api.practiceapi.dev',
	headers: {
	    "Content-Type": "application/json"
	},
    authorizer: 'authorizer:token'
});
