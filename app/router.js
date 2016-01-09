import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('polls', { path: '/polls' });
  this.route('poll', { path: '/polls/:poll_id'});
  this.route('users');
});

export default Router;
