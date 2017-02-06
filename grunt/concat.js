module.exports = {
    // Build
    libs: {
        src: [
            'node_modules/angular-gettext/dist/angular-gettext.min.js'
        ],
        dest: 'tmp/libs.js'
    },
    // Build modules for registering components on them
    modules: {
        src: [
            'src/**/module.js'
        ],
        dest: 'tmp/modules.js'
    },
    // Exclude modules from second round, include templates file
    components: {
        src: [
            'tmp/libs.js',
            'tmp/modules.js',
            'src/**/*.js',
            'tmp/templates.js',
            '!src/**/module.js'
        ],
        dest: 'dist/<%= pkg.name %>.js'
    },
    sass: {
        src: ['src/**/*.scss', '!src/**/_*.scss'],
        dest: 'tmp/<%= pkg.name %>.scss'
    }
};