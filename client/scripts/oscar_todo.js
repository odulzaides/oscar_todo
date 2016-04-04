///     Helpers
Template.todo_list.helpers({
    'todo': function() {
        return Todo.find({}, { sort: { due: -1 } });
    }
});

///     Events

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
            createdOn: date,
            name: todo,
            due: due
        });
        $('#new_todo').val("");
        $('#due_date').val("");
        return false;
    }
});
