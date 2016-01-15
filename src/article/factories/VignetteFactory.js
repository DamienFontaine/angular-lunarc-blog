/**
 * @ngdoc service
 * @name lunarc.article.Vignette
 * @description
 *
 * Vignette d'un article
 */
angular.module('lunarc.article').factory('Vignette', [function() {

  var Vignette = function(url) {
    this.url = url || '';
    this.credit = credit || '';
  };

  return Vignette;
}]);
