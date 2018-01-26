angular.module('myApp', [])
  .controller('landingPageController', function($scope) {
	$scope.toggle = true;
	$scope.$watch('toggle', function(){
		$scope.linkedinText = $scope.toggle ? 'Click here to see my LinkedIn page' : 'Click again to hide the link';
	})
})
