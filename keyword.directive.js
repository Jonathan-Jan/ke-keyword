/**
 * Created by jonathan on 30/09/16.
 */

var _keyWords = {

};

angular.module('common.directives')
    .directive('keKeyword', function () {

        function link(scope, element, attrs) {

            var keyword =  element.html();
            var html = `<a class="keyword" target="_blank" href="${_keyWords[keyword]}">${keyword}</a>`;
            element.html(
                html
            );
        }

        return {
            link: link,
            restrict: 'AE'
        }
    })
    //this directive is needed if ke-keyword is called inside a ng-bind-html
    .directive('compile', ['$compile', function compileDirective($compile) {
        return function(scope, element, attrs) {
            scope.$watch(
                function(scope) {
                    return scope.$eval(attrs.compile);
                },
                function(value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        };
    }]);