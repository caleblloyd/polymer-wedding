module.exports = {
    staticFileGlobs: [
        '/index.html',
        '/manifest.json',
        '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
        '/images/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}',
        '/src/**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}'
    ],
    navigateFallback: '/index.html'
};
