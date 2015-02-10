var app = angular.module('textSupport');

app.service('supportService', function($http){
  this.postReply = function(contents){
    console.log(contents);
    return $http({
      method: 'POST',
      url: 'http://localhost:8080/support/messages',
      data: {contents: contents}
    });
  };
})