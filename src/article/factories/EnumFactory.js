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
      'TRASH': 'Trash'
    }
  };
}]);
