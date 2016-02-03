import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('todos', function(){
    this.route('active');
    this.route('completed')
  });
  this.route('users');
  this.route('login');
  this.route('signup');
});

export default Router;
