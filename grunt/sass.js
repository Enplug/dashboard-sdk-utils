module.exports = {
     options: {
         sourceMap: false
     },
    build: {
        files: {
            'dist/<%= pkg.name %>.css': 'src/sass/utils.scss'
        }
    }
};
