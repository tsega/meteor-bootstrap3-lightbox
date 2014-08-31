Package.describe({
  summary: "Bootstrap 3 Lightbox from @ashleydw, packaged for Meteor.js",
  version: "0.2.0",
  git: "https://github.com/tsega/meteor-bootstrap3-lightbox.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0');

  api.use('jquery', 'client');

  api.add_files([
    'lib/css/ekko-lightbox.min.css',
    'lib/js/ekko-lightbox.min.js'
    ], 'client');
});
