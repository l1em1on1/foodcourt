/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
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

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
