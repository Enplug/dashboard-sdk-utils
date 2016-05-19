module.exports = function (grunt) {
    var json = grunt.file.readJSON('./package.json');

    json.name = json.name.replace( '@enplug/', '' );
    return json;
};
