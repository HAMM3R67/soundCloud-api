var app = angular.module('sounder')

app.service('soundService', function($http){
	var url = 'http://api.soundcloud.com/users/'
	
	this.getUser = function(username){
		return $http.get(url + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e')
	}
	
})