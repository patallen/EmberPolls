import Ember from 'ember';

export default Ember.Route.extend({
    renderTemplate() {
        this.render('todos.index');
    },
    model() {
        return this.store.filter('todo', {completed: false}, function(todo){
            return !todo.get('complete');
        });
    }
});
