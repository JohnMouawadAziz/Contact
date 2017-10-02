contactGallery.controller('loginController', ['$scope', '$timeout', function ($scope) {
    $scope.login = {
        userName: '',
        password: ''
    };

    $scope.loginAuth = loginAuth;

    function loginAuth() {

     console.log($scope.login);
     var email=$scope.login.email;
     var password =$scope.login.password;
     if ($scope.email=='john@gmail.com' && $scope.password=='john') {
        $location.path('/gallery');

    }

} 
}]);