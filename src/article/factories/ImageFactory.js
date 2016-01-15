/**
 * @ngdoc service
 * @name lunarc.article.Image
 * @description
 *
 * Image d'un article
 */
angular.module('lunarc.article').factory('Image', [function() {

  var Image = function(url) {
    this.url = url || '';
    this.credit = credit || '';
  };

  return Image;
}]);
