/**
 * @ngdoc service
 * @name lunarc.article.Tag
 * @description
 *
 * Tag d'un article
 */
angular.module('lunarc.article').factory('Tag', [function() {

  var Tag = function(name) {
    this.name = name;
  };

  return Tag;
}]);
