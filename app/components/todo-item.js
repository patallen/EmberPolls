import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNames: ['todo-item'],
    buffText: Ember.computed.oneWay('text'),
    actions: {
        setEditing: function(){
            var todo = this.todo;
            this.set('buffText', todo.get('text'))
            this.set('isEditing', true) 
        },
        doneEditing: function() {
            var todo = this.todo;
            this.set('buffText', this.buffText)
            todo.set('text', this.buffText)
            // This still needs to save, but we have
            // to implement 'PATCH' method on the backend.
            this.set('isEditing', false)
        },
        cancelEditing: function(){
            var todo = this.todo;
            todo.set('text', this.buffText)
            this.set('isEditing', false)
        }
    }
});
