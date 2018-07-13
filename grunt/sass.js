const sass = require('node-sass');

module.exports = {
     options: {
         sourceMap: false,
         implementation: sass,
     },
    build: {
        files: {
            'dist/<%= pkg.name %>.css': 'src/sass/utils.scss'
        }
    }
};
