import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todo', {path: '/todos/:todo_id'});
  this.route('todos');
  this.route('users');
});

export default Router;
