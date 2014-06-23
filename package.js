Package.describe({
    summary: "Bootstrap 3 Lightbox from [ashleydw](https://github.com/ashleydw/lightbox) packaged for Meteor.js"
});

Package.on_use(function (api) {
    api.use('jquery', 'client');

    // fonts
    api.add_files('lib/css/ekko-lightbox.min.css', 'client');
    api.add_files('lib/js/ekko-lightbox.min.js', 'client');
});
