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
    where: 'client'
});

Router.route('/groups/:group_slug', {
    name: 'group',
    controller: 'GroupController',
    where: 'client'
});

Router.route('/groups/:group_slug/:place_slug', {
    name: 'place',
    controller: 'GroupController',
    where: 'client'
});

Router.route('/user/:user', {
    name: 'dashboard',
    controller: 'HomeController',
    where: 'client'
});
