/**
 * @ngdoc directive
 * @name materialInput
 * @module enplug.sdk.utils
 *
 * @param field {expression=} The model value to bind the input to.
 * @param type {String} Input type
 * @param label {String} Input label
 * @param name {String} Input name
 * @param directives {Object} key:value of directives to assign to input. This directive creates isolate+transcluded scope, so remember to use $parent in values.
 * @param required {boolean},
 * @param autofocus {boolean} - causes this input to be focused after creation
 */
angular.module('enplug.sdk.utils').directive('materialInput', ['$log', '$compile', 'GUID', '$parse',
    function ($log, $compile, GUID, $parse) {
        'use strict';

        // Todo remove Lodash dependency
        // Todo help block attribute
        // Todo fix partial reference
        // FIXME: label id/for probably isn't necessary because input is wrapped in label

        return {
            restrict: 'E',
            require: '^form',
            scope: {
                model: '=field'
            },
            transclude: true, // Allows us to wrap up custom html
            templateUrl: 'sdk-utils/material-input.tpl',
            link: function ($scope, $element, $attrs, $form, $transclude) {

                var ignoreAttributes = ['class', 'label', 'directives', 'field', 'focus', 'ng-if', 'ng-show', 'ng-hide'],
                    input = $element.find('input')[0],
                    name = $attrs.name,
                    directives = $parse($attrs.directives)($scope),
                    autofocus = $attrs.autofocus;

                $scope.id = name + '-' + GUID.new(); // better to use name?
                $scope.label = $attrs.label;
                $element.removeAttr('label');

                // Convenience method so we don't have to apply form-groups
                if (!$element.parent().hasClass('form-group')) {
                    $element.addClass('form-group');
                }

                // Copy attributes over to input
                angular.forEach($attrs, function (value, _attr) {
                    var attr = _attr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
                    if (attr.indexOf('$') === -1 && ignoreAttributes.indexOf(attr) === -1) {
                        $element.removeAttr(attr);
                        input.setAttribute(attr, value);
                    }
                });

                // Copy custom directives
                angular.forEach(directives, function (value, directive) {
                    input.setAttribute(directive, value);
                });
                $element.removeAttr('directives');

                // Copy any wrapped html into input template
                $transclude(function(clone) {
                    $element.append(clone);
                });

                // Compile input, causing AngularJS to reprocess HTML after all changes we've made, directives applied etc
                $compile(input)($scope);

                if (autofocus) {
                    $element[0].focus();
                }

                $scope.formField = $form[name]; // used for ng-messages. Must retrieve after re-$compiling input
                // Stupid hack to get $dirty state to be correctly set, which bizarrely doesn't happen. WTF
                $scope.$watch('model', function (val) {
                    if (val !== undefined && val !== null && $scope.formField) {
                        $scope.formField.$dirty = true;
                    }
                });
            }
        };
    }
]);
