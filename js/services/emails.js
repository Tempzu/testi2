app.factory('emails', ['$http', function($http) {
  return $http.get('https://tempzu.github.io/testi3/')
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);
