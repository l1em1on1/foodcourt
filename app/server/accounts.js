ServiceConfiguration.configurations.remove({
    service: "google"
});

ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: Meteor.settings.google_client_id,
  secret: Meteor.settings.google_secret,
});
