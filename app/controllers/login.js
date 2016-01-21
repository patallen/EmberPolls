import Ember from 'ember';

export default Ember.Controller.extend({
    sendCredentials: function(username, password) {
        var _this = this;
        var adapter = this.container.lookup('adapter:application');
        adapter.ajax(
            adapter.host+'/auth',
            'POST',
            {
                username: "pat",
                password: "password" 
            }
        ).then(function(data){
            console.log(data)
        }).catch(function(err){
            console.log(err)
        })
    },
    alertMe: function() {
        alert("alerting you") 
    }
});
