const app = angular.module('myapp', []);

app.constant('utils', {
	now: function() {
		const d = new Date();
		return {
			y: d.getFullYear(),
			m: d.getMonth() + 1,
			d: d.getDate(),
			w: d.getDay(),
			h: d.getHours(),
			i: d.getMinutes(),
			s: d.getSeconds(),
			u: Math.floor(d.getTime() / 1000),
			g: d.getHours() < 11 ? 0 :
			   d.getHours() > 18 ? 2 : 1
		}
	},
	zero: function(n, l = 2) {
		return ('0000000' + n).slice(-l);
	},
	greets: ['おはようございます', 'こんにちは', 'こんばんは']
})

app.controller('appCtrl', function($scope) {

});

app.controller('headerCtrl', ['$scope', 'utils', function($scope, utils) {
	$scope.greet = utils.greets[utils.now().g];
	$scope.userName = 'アヤノコウジ';
	$scope.userId = 0123456789;
}]);