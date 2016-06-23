app.factory('emails', ['$http', function($http) {
  return $http.get('json/emails.json')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
