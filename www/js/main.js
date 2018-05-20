// This is a JavaScript file
ons.ready(function () {
	console.log("Onsen UI is ready!");
});

var module = angular.module('my-app', [
	'onsen',
	"ngMaterial",
	"ngAnimate",
	"ngAria",
	"ngMessages",
	"mdPickers"]);
module.controller('PageController', function ($scope) {
	$scope.alert = function (message) {
		ons.notification.alert(message);
	};
});

window.fn = {};
window.fn.open = function () {
	var menu = document.getElementById('menu');
	menu.open();
};
window.fn.load = function (page) {
	var content = document.getElementById('content');
	var menu = document.getElementById('menu');
	content
		.load(page)
		.then(menu.close.bind(menu));
};

function goPage(page) {
	var options = {
		animation: 'slide', // アニメーションの種類
	};
	pushPage(page);
}