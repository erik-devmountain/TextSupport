var app = angular.module('textSupport');

app.controller('supportController', function($scope, $firebase, supportService){
  var ref = new Firebase("https://textsupport-erik.firebaseio.com/numbers");

  var sync = $firebase(ref);
  // download the data into a (psuedo read-only), sorted array
  // all server changes are applied in realtime
  var messagesArray = sync.$asArray();
  // place the list into $scope for use in the DOM
  $scope.messages = messagesArray;
  console.log($scope.messages);

  $scope.sendReply = function(messagereply){
    console.log('this is message-reply: ', messagereply)
    supportService.postReply(messagereply).then(function(res){
      console.log(res);
    })
  }
})