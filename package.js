var version = '3.3.9';

Package.describe({
  name: 'apolakipso:swiper',
  summary: 'iDangero.us Swiper - mobile touch slider with hardware accelerated transitions and native behavior',
  version: version,
  git: 'https://github.com/apolakipso/Swiper'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'dist/css/swiper.min.css',
    'dist/js/swiper.js'
    ], ['client']
  );

  // Since swiper is attached to window, we do not need to export Swiper
  // api.export('Swiper');
});

Package.onTest(function (api) {
});
