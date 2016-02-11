import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        authenticate: function() {
            var credentials = this.getProperties('identification', 'password');
            var authenticator = 'authenticator:jwt';

            this.get('session').authenticate(authenticator, credentials).then(function(){
                // We could give a welcome alert.
            },
            function(err){
                // We should give them their error here.
                console.log(err.description);
            });
        }
    }
});
