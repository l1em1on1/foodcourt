Groups = new Mongo.Collection('groups');

Groups.attachSchema(new SimpleSchema({
    name:           { type: String, label: "Name", max: 50 },
    slug:           { type: String, label: "Slug", max: 50 },
    geo:            { type: String, label: "Location", max: 40 },
    averageRating:  { type: Number, label: "Average Rating" },
    placesCount:    { type: Number, label: "Places Count" },
    users:          { type: [Object] }
}));

if (Meteor.isServer) {
  Groups.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Groups.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
