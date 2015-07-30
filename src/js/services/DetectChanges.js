angular.module('enplug.sdk.utils').service('DetectChanges', ['$log', function ($log) {

    // TODO: remove lodash dependency

    'use strict';

    /**
     * Fields being watched for changes.
     * @type {Array}
     */
    var fields = [];

    /**
     * Convenience debug method.
     * @param field
     */
    function log(field) {
        $log.debug('Change detected:', field);
    }

    return {

        /**
         * Takes a single or array of fields to watch on the $scope.
         * Example: 'scheduling.times', or ['height', 'width']
         * Todo: is there any harm in using scope? should we be destroying the fields after route change?
         * @param watchForChanges
         * @param scope
         * @param verbose for debugging
         */
        watch: function (watchForChanges, scope, verbose) {
            fields = []; // reset any previous usages
            if (!_.isObject(scope)) {
                $log.error('Detect changes requires $scope.');
                return;
            }
            if (!_.isArray(watchForChanges)) {
                watchForChanges = [watchForChanges];
            }

            // Register watchers for each field
            watchForChanges.forEach(function (watcher) {
                var field = {
                    property: watcher,
                    changed: false
                };

                // Get the original value, can be as nested as we want
                field.original = _.cloneDeep(watcher.split('.').reduce(function (map, key) {
                    return map[key];
                }, scope));

                // Store the type for debugging/reference
                field.type = typeof field.original;

                // Track this field
                fields.push(field);

                // Register listeners based on data type
                if (_.isArray(field.original)) {
                    // Arrays need to be watched as a collection
                    scope.$watch(field.property, function (newValue, oldValue) {
                        // Todo add a property to track by instead of equality xor?
                        field.changed = !_.isEqual(newValue, field.original);
                        field.current = newValue;
                        if (verbose && newValue !== oldValue) {
                            log(field);
                        }
                    }, true);
                } else if (_.isDate(field.original)) {
                    field.type = 'Date';
                    scope.$watch(field.property, function (newValue) {
                        if (_.isDate(newValue)) {
                            field.changed = field.original.getTime() !== newValue.getTime();
                        } else {
                            field.changed = true;
                        }
                        field.current = newValue;
                        if (verbose) {
                            log(field);
                        }
                    });
                } else {
                    // Todo watch objects differently?
                    scope.$watch(field.property, function (newValue, oldValue) {
                        field.changed = newValue !== field.original;
                        field.current = newValue;
                        if (verbose && newValue !== oldValue) {
                            log(field);
                        }
                    });
                }
            });

            if (verbose) {
                $log.debug('[DetectChanges] Registered fields to watch:', fields);
            }
        },

        /**
         * Returns whether any properties being watched have changed.
         * @returns {boolean}
         */
        hasChanges: function () {
            var changed = _.filter(fields, { changed: true });
            return changed.length > 0;
        },

        /**
         * Returns array of property strings being watched for changes.
         * @returns {Array}
         */
        fieldsChanged: function () {
            return _.pluck(_.filter(fields, { changed: true }), 'property');
        },

        reset: function () {
            fields = [];
        }
    };
}]);
