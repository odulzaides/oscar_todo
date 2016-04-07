if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Todo.findOne()){
    	
    	var date = new Date().toLocaleDateString("en-US");
    	
    	Todo.insert({
                        createdBy:"meteor anonymous",
    		createdOn:date,
    		name:"First Todo",
    		due:"Today"
    	});
    }
  });
}
