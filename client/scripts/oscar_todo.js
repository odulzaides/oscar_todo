///     Helpers
Template.todo_list.helpers({
    'todo': function() {
        return Todo.find({createdBy:Meteor.user()}, { sort: { due: -1 } });
    }
});

///     Events
///     New Todo Form Event
Template.new_todo_form.events({
    'submit .js_add_todo': function(event) {
        //Also, you can call method toLocaleDateString with two parameters:
        var date = new Date().toLocaleDateString("en-US", {
            "month": "numeric",
            "day": "numeric"
        });
        var todo = event.target.new_todo.value;
        var due = event.target.due_date.value;
        console.log(todo, due);
        Todo.insert({
            createdBy:Meteor.user(),
            createdOn: date,
            name: todo,
            due: due
        });
        $('#new_todo').val("");
        $('#due_date').val("");
        return false;
    }
});

///     todo_items events
Template.todo_items.events({
    'click .js_todo_delete':function(event){
        console.log('clicked');
        var id = this._id;
        console.log(id);
        Todo.remove({_id:id});
    }
});

