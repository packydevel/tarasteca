angular.module('TarasTeca', [])
  .controller('BookController', ['$scope', BookController]);

function BookController($scope) {
	$scope.book = {};

	$scope.books = 
	[ 
        { id: 1, title: 'La storia di Taranto', author: 'Giacinto Peluso', year: "1985" },
        { id: 2, title: '\'A Cummedie de Dande', author: 'Claudio de Cuia', year: "2010"},
        { id: 3, title: 'Taranto dove la trovo', author: 'Vito Forleo', year: "1930" },
        { id: 4, title: 'Filannègne', author: 'Angelo Fanelli', year: "1980" },
        { id: 5, title: '\'U relogge d\'a Chiazze', author: 'Diego Marturano', year: "1970" }
	];

	bookValidator = {
		"title": { required: "Title mandatory" },
		"author": { required: "Author mandatory" },
		"year": { 
			required: "Year mandatory", 
			minlength: "Year must be minimum 4 digit long",
			maxlength: "Year must be maximum 4 digit long"
		}
	}

	maxId = function() {
		return $scope.books.length;	
	};

	$scope.addBook = function(book) {
		if (validate(book)) {
			book.id = maxId() + 1;
			$scope.books.push(book);
			resetModel("book");
		} else {
			$scope.add_book_error = getErrors(book);
		}
	};

	validate = function(book) {
		console.log($scope.book_form.$valid);
		return $scope.book_form.$valid;
	}

	getErrors = function(book) {
		var errors = [];
		console.log(book);
		for (var key in bookValidator) {
			console.log(key);
			console.log($scope.book_form[key]);
			console.log($scope.book_form);
			var bookProperty = $scope.book_form[key];
			console.log(bookProperty);
			for (var key2 in $scope.book_form[key].$error) {
				console.log(key2);
				errors.push(bookValidator[key][key2]);
			}
		}

		return errors;
	}

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