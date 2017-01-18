module.exports = {
    i18n: {
        expand: true,
        cwd: 'src/i18n/',
        src: ['*.json'],
        dest: 'dist/i18n',
        flatten: true,
        filter: 'isFile'
    }
};
