Package.describe({
    name: 'slayerokk:bootstrap',
    version: '0.0.1',
    summary: 'Includes Bootstrap 3.3.7 in Meteor Project',
    git: 'https://github.com/slayerokk/meteor-fontawesome.git',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use('slayerokk:jquery@0.0.1');
    api.addFiles([
        'css/bootstrap.min.css',
        'css/bootstrap-theme.min.css',
        'bootstrap.min.js'
    ], 'client');
    api.addAssets([
        'fonts/glyphicons-halflings-regular.eot',
        'fonts/glyphicons-halflings-regular.svg',
        'fonts/glyphicons-halflings-regular.ttf',
        'fonts/glyphicons-halflings-regular.woff',
        'fonts/glyphicons-halflings-regular.woff2'
    ], 'client');
});