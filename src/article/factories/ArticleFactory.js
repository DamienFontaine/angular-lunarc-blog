/**
 * @ngdoc service
 * @name lunarc.article.Article
 * @description
 *
 * Article
 */
angular.module('lunarc.article').factory('Article', [function() {

  var Article = function(titre, texte, status, create, modified, image, vignette) {
    this.titre = titre || '';
    this.texte = texte || '';
    this.status = status || 'Draft';
    this.create = create || new Date();
    this.modified = modified || new Date();
    this.image = image || new Image();
    this.vignette = vignette || new Vignette();
  };

  return Article;
}]);
