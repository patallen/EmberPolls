import Ember from 'ember';

export default Ember.Controller.extend({
    model: this.store,
    actions: {
        createTodo: function(){
            var newTodo = this.get('todo');
            var todo = this.store.createRecord('todo', {text: newTodo, completed: false});
            todo.save();
        }
    }
});
