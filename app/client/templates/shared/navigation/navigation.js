Template.Navigation.events({
    "click #login": function() {
        Meteor.loginWithGoogle({}, function (err) {
                if(err) {
                    console.log(err);
                }
            }
        );
    },
    "click #logout": function() {
        Meteor.logout();
    }
});

