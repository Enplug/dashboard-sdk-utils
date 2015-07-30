module.exports = {
    build: {
        files: {
            'dist/<%= pkg.name %>.min.css': 'dist/<%= pkg.name %>.css'
        }
    }
};
