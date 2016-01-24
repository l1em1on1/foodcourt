Places = new Mongo.Collection('places');

Places.attachSchema(new SimpleSchema({
    name:           { type: String, label: "Name", max: 50 },
    slug:           { type: String, label: "Name", max: 50 },
    address:        { type: String, label: "Description", max: 100 },
    geo:            { type: String, label: "Location", max: 40 },
    averageRating:  { type: Number, label: "Average Rating", optional: true },
    summary:        { type: String, label: "Summary", max: 140 },
    description:    { type: String, label: "Summary", max: 1000 },
    isFood:         { type: Boolean, label: "Serves food" },
    isVegan:        { type: Boolean, label: "Vegan" },
    isVegetarian:   { type: Boolean, label: "Vegan" },
    isTakeaway:     { type: Boolean, label: "Takeaway" },
    sitIn:          { type: Boolean, label: "Sit in" },
    website:        { type: String, label: "Website" },
    comments:       { type: [Object] }
}));

Places.helpers({
    comments: function() {
        return Comments.findOne(this.placeId);
    }
});

if (Meteor.isServer) {
  Places.allow({
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

  Places.deny({
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
