/**
 * @ngdoc service
 * @name PositionTools
 * @module enplug.sdk.utils
 * @source snippets from jquery library
 */

 angular.module('enplug.sdk.utils').factory('PositionTools', ['$window', function ($window) {
    
    function getOffset(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return {
            	top: rect.top + $window.pageYOffset - docElem.clientTop,
                left: rect.left + $window.pageXOffset - docElem.clientLeft
            };
        }
    }

	function getLeft(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return rect.left + $window.pageXOffset - docElem.clientLeft;
        }
    }

	function getTop(element)
    {
        var docElem, rect, doc;
        rect = element.getBoundingClientRect();
        // Make sure element is not hidden (display: none) or disconnected
        if ( rect.width || rect.height || element.getClientRects().length ) {
        	doc = element.ownerDocument;
            docElem = doc.documentElement;
            return rect.top + $window.pageYOffset - docElem.clientTop;
        }
    }

    return {
        getOffset: getOffset,
        getLeft: getLeft,
        getTop: getTop
    };
}]);
