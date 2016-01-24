import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    actions: {
        authenticate: function() {
            var credentials = this.getProperties('identification', 'password');
            console.log(credentials);
            var authenticator = 'authenticator:jwt';

            this.get('session').authenticate(authenticator, credentials);
        }
    }
    /*
    sendCredentials: function(username, password) {
        var adapter = this.container.lookup('adapter:application');
        adapter.ajax(
            adapter.host+'/auth',
            'POST',
            {data: {
                "username": this.get('username'),
                "password": this.get('password')
            }}
        ).then(function(data){
            console.log(data)
        }).catch(function(err){
            console.log(err)
        })
    },*/
});
