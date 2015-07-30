module.exports = {
    build: {
        src: ['src/**/*.tpl.html'],
        dest: 'tmp/templates.js',
        options: {
            singleModule: true,
            module: 'enplug.sdk.utils.templates',
            indentString: '    ', // 4-space indents
            useStrict: true,
            rename: function (moduleName) {
                return moduleName.replace('templates', 'sdk-utils').replace('.html', '');
            },
            htmlmin: {
                collapseBooleanAttributes: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: false,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }
    }
};
