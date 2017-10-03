contactGallery.controller('loginController', ['$scope', '$location', function ($scope, $location) {

   $scope.login = {

       email: '',

       password: ''

   };



   $scope.loginAuth = loginAuth;

//function to move from login to gellary if email and pass was true

   function loginAuth() {

       console.log($scope.login);

       if ($scope.login.email == 'john@gmail.com' && $scope.login.password == 'john') {

           console.log('here');

           $location.path('/gallery');

       }



   }

}]); 