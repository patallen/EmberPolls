import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', function() {
    this.route('complete');
    this.route('active');
  });
  this.route('users');
  this.route('login');
  this.route('signup');
  this.route('lists');
  this.route('list', { path: '/lists/:id'}, function() {
    this.route('active');
    this.route('completed');
  });
});

export default Router;
