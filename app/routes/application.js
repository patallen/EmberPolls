import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    sessionAuthenticated() {
        this.transitionTo('lists');
    },
    sessionInvalidated() {
        this.transitionTo('login');
    },
});
