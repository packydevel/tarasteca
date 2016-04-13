angular.module('TarasTeca', [])
  .controller('BookController', ['$scope', BookController]);

function BookController($scope) {
	$scope.book = {};

	$scope.books = 
	[ 
        { id: 1, title: 'La storia di Taranto', author: 'Giacinto Peluso' },
        { id: 2, title: '\'A Cummedie de Dande', author: 'Claudio de Cuia' },
        { id: 3, title: 'Taranto dove la trovo', author: 'Vito Forleo' },
        { id: 4, title: 'Filannègne', author: 'Angelo Fanelli' },
        { id: 5, title: '\'U relogge d\'a Chiazze', author: 'Diego Marturano' }
	];

	maxId = function() {
		return $scope.books.length;	
	};

	$scope.addBook = function(book) {
		book.id = maxId() + 1;
		$scope.books.push(book);
		resetModel("book");
	};

	resetModel = function(modelName) {
		eval("$scope." + modelName + "={}");
	}
};

/*
(function() {
	var app = angular.module("tarasTeca", []);

	var bookList = [
	{
		author: "Diego Marturano",
		editor: "Lacaita",
		year: 1978,
		price: 30,
		inTeca: true
	},
	{
		author: "Alfredo Majorano",
		editor: "Lacaita",
		year: 1978,
		price: 15,
		inTeca: true
	},
	{
		author: "Claudio de Cuia",
		editor: "Lacaita",
		year: 1978,
		price: 20,
		inTeca: true
	}]

	app.controller('bookController', function() {
		this.bookList = bookList;
	})
})();
*/