describe('lunarc.article.ArticleService', function() {

  beforeEach(module('lunarc.article'));

  var ArticleService, $httpBackend;

  beforeEach(inject(function($injector, _$httpBackend_) {
    ArticleService = $injector.get('ArticleService');
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should return an article by Id', function() {
    var url = '/article/564a26eb1d41c81764000001';
    var response = {
      "Id": "564a26eb1d41c81764000001",
      "Titre": "New Article",
      "Pretty": "new-article",
      "Texte": "Content",
      "Tags": [],
      "Image": {
        "Url": "",
        "Credit": ""
      },
      "Vignette": {
        "Url": "",
        "Credit": ""
      },
      "Status": "PENDING",
      "Create": "2015-11-16T19:56:43.614+01:00",
      "Modified": "2015-11-16T20:03:14.178+01:00",
      "UserRef": {
        "Collection": "user",
        "ID": "55f06ff71d41c85de4000001",
        "Database": ""
      }
    };
    $httpBackend.when('GET', url).respond(response);
    $httpBackend.expectGET(url);
    var article = ArticleService.get({
      Id: '564a26eb1d41c81764000001'
    });
    $httpBackend.flush();
    expect(article.Id).toBe(response.Id);
  });

  it('should return an article by Titre', function() {
    var url = '/article/new-article';
    var response = {
      "Id": "564a26eb1d41c81764000001",
      "Titre": "New Article",
      "Pretty": "new-article",
      "Texte": "Content",
      "Tags": [],
      "Image": {
        "Url": "",
        "Credit": ""
      },
      "Vignette": {
        "Url": "",
        "Credit": ""
      },
      "Status": "PENDING",
      "Create": "2015-11-16T19:56:43.614+01:00",
      "Modified": "2015-11-16T20:03:14.178+01:00",
      "UserRef": {
        "Collection": "user",
        "ID": "55f06ff71d41c85de4000001",
        "Database": ""
      }
    };
    $httpBackend.when('GET', url).respond(response);
    $httpBackend.expectGET(url);
    var article = ArticleService.getByPretty({
      Pretty: 'new-article'
    });
    $httpBackend.flush();
    expect(article.Id).toBe(response.Id);
  });
});
