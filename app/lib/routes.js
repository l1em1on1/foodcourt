Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/groups', {
    name: 'groups',
    controller: 'GroupController',
    where: 'client',
    actionDetails: 'groupList'
});

Router.route('/groups/:group_slug', {
    name: 'group',
    controller: 'GroupController',
    where: 'client',
    actionDetails: 'group'
});

Router.route('/groups/:group_slug/:place_slug', {
    name: 'place',
    controller: 'PlaceController',
    where: 'client'
});

Router.route('/user', {
    name: 'dashboard',
    controller: 'HomeController',
    where: 'client'
});
