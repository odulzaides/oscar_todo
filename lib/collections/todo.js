Todo = new Mongo.Collection("todo");

Todo.allow({
    insert: function(usedid, doc) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    },
    update: function(usedid, doc) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    },
    remove: function(usedid, doc) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    },
});
