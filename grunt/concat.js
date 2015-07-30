module.exports = {
    // Build modules first for registering components on them
    modules: {
        src: ['src/**/module.js'],
        dest: 'tmp/modules.js'
    },
    // Exclude modules from second round, include templates file
    components: {
        src: [
            'tmp/modules.js',
            'src/**/*.js',
            'tmp/templates.js',
            '!src/**/module.js'],
        dest: 'dist/<%= pkg.name %>.js'
    },
    sass: {
        src: ['src/**/*.scss', '!src/**/_*.scss'],
        dest: 'tmp/<%= pkg.name %>.scss'
    }
};
