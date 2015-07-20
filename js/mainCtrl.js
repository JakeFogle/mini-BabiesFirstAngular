var app = angular.module("friendsList")

app.controller("mainCtrl", function($scope) {
	$scope.friends = ['Austin', 'Ben', 'Travis', 'Carly', 'Kara', 'Kelly', 'Ian', 'Matt', 'Bracken', 'Erik', 'Zac', 'Brandon'];

	$scope.addFriend = function() {
			$scope.friends.push($scope.newFriend);
	}


});