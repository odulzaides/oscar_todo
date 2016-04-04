if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Todo.findOne()){
    	
    	var date = new Date().toLocaleDateString("en-US");
    	
    	Todo.insert({
    		createdOn:date,
    		name:"First Todo",
    		due:"Today"
    	})
    }
  });
}
