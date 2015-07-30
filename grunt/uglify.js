module.exports = {
    options: {
        mangle: false
    },
    build: {
        files: {
            'dist/<%= pkg.name %>.min.js': 'dist/<%= pkg.name %>.js'
        }
    }
};
