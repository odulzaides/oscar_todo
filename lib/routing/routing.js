Router.configure({
    'layoutTemplate': 'app_layout'
});
Router.route('/', function() {
    this.render('navbar', {
        to:"navbar"
    });
    this.render('breadcrumb_home', {
        to: "breadcrumbs"
    });
    this.render('new_todo_form', {
        to: "form"
    });
    this.render('todo_list', {
        to: "main"
    });
});
