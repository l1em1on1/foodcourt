Comments = new Mongo.Collection('comments');


Comments.attachSchema(new SimpleSchema({
    copy:       { type: String, label: "Description", max: 140 },
    userId:     { type: String, regEx: SimpleSchema.RegEx.Id },
    placeId:    { type: String, regEx: SimpleSchema.RegEx.Id },
    createdBy:  { type: String, autoValue: function() { return this.userId } }
}));

if (Meteor.isServer) {
  Comments.allow({
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

  Comments.deny({
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
