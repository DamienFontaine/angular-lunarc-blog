/**
 * @ngdoc service
 * @name lunarc.article.ArticleService
 * @requires $resource
 * @description
 *
 * Service d'accès aux articles
 */
angular.module('lunarc.article').factory("ArticleService", ['$resource', function($resource){
  return $resource('/article/:Id', {Id:'@ID', Pretty: '@Pretty'},
  {
    update: { method: 'PUT', params: {
      Id: '@ID'
    }},
    getByPretty: {
      method: 'GET',
      url: '/article/:Pretty'
    }
  });
}]);
