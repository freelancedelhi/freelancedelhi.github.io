const app = angular.module('theApp', [
	'ngRoute'
]);

const routerPaths = {
  login: '/login',
  home: '/home'
};

app.config(function ($routeProvider) {
	$routeProvider
		.when(routerPaths.login, {
			templateUrl: 'templates/login.html',
			controller: 'loginCtrl'
		})
		.when(routerPaths.home, {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.otherwise({ redirectTo: routerPaths.home });
});

app.controller('loginCtrl', function ($scope, $location) {
	console.log('LOGIN');
});

app.controller('homeCtrl', function ($scope, $location) {
	console.log('HOME');
});