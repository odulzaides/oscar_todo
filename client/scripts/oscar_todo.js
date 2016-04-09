///     Helpers
Template.todo_list.helpers({
    'user': function() {
        user = Meteor.user().profile;
        console.log(user);
        user = fixObjectKeys(user);
        console.log(user.firstname);
        return user.firstname;
    },
    'todo': function() {
        return Todo.find({ createdBy: Meteor.user() }, { sort: { due: -1 } });
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
            createdBy: Meteor.user(),
            createdOn: date,
            name: todo,
            due: due
        });
        $('#new_todo').val("");
        $('#due_date').val("");
        return false;
    }

});
/// todo_list events
Template.todo_list.events({
    /// Show input field to enter new list name    
    'click .js_make_new_list': function(event) {
        console.log('clicked');
        $('#hidden-div').toggle();
    },
    'submit .js_create_list': function(event) {
        var list = event.target.new_list.value;
        console.log(list);
        list = list.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        });
        alert(list);
        list = new Mongo.Collection(list.toLowerCase());
        $('#hidden-div').toggle();
        return false;
    }
});

///     todo_items events
Template.todo_items.events({
    'click .js_todo_delete': function(event) {
        console.log('clicked');
        var id = this._id;
        console.log(id);
        Todo.remove({ _id: id });
    }
}); // end todo item 
function fixObjectKeys(obj) {
    var newObj = {};
    for (key in obj) {
        var key2 = key.replace("-", "");
        newObj[key2] = obj[key];
    }
    return newObj;
}
