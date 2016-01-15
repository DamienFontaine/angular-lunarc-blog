(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var app = angular.module('lunarc.blog', ['lunarc.core', 'lunarc.article']);

},{}],2:[function(require,module,exports){
var app = angular.module('lunarc.article', ['lunarc.flash', 'lunarc.auth', 'ngResource']);

module.exports = 'lunarc.article';

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
/**
 * @ngdoc service
 * @name lunarc.article.Enum
 * @description
 *
 * Constantes
 */
angular.module('lunarc.article').factory('Enum', [function() {

  return {
    Status: {
      'DRAFT': 'Draft',
      'PUBLISH': 'Publish',
      'PENDING': 'Pending',
      'TRASH': 'Trash',
    }
  };
}]);

},{}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
/**
 * @ngdoc service
 * @name lunarc.article.ArticleService
 * @requires $resource
 * @description
 *
 * Service d'accès aux articles
 */
angular.module('lunarc.article').factory("ArticleService", ['$resource', function($resource){
  return $resource('/article/:Id', {Id:'@ID'},
  {
    update: { method: 'PUT', params: {
      Id: '@ID'
    }}
  });
}]);

},{}]},{},[1,2,3,4,5,6,7,8]);
