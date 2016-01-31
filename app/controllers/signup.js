import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        signUp: function(){
            var adapter = this.container.lookup('adapter:application');
            var credentials = this.getProperties(
                'username', 'email', 'password'
            );
            adapter.ajax("http://api.practiceapi.dev/signup", 'POST',
                {
                    "data": {
                        "username": credentials.username,
                        "password": credentials.password,
                        "email": credentials.email,
                    }
                }
            ).then(function(succ){
                console.log("Great success!");
            }, function(err){
                console.log(err)
            })
        } 
    }
});
