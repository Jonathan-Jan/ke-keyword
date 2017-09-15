/**
 * Created by jonathan on 30/09/16.
 */

let _keyWords = {

};

angular.module('common.directives')
    .directive('keKeyword', () => {

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
    .directive('compile', ['$compile', ($compile) => {
        return (scope, element, attrs) => {
            scope.$watch(
                (scope) => {
                    return scope.$eval(attrs.compile);
                },
                (value) => {
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        };
    }]);