import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNames: ['todo-item'],
    buffText: "GOOGL",
    actions: {
        setEditing: function(){
            this.buffText = this.todo.get('text')
            this.set('isEditing', true) 
        },
        cancelEditing: function(){
            this.set('isEditing', false)
        }
    }
});
