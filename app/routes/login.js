import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        login: function() {
            var router = this;
            var controller = router.controller;
            controller.sendCredentials("pat", "password");
        }
    }
});
