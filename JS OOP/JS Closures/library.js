function solve() {

	var library = (function () {

        var books = [];
		var categories = [];
		
		function listBooks(criteria) {
			let sortedBooks = [...books].sort((a, b) => a.ID - b.ID);

			switch(criteria) {
				case "title":
					return sortedBooks.sort((a, b) => a.title.localeCompare(b.title));

				case "author": 
					return sortedBooks.sort((a, b) => a.author.localeCompare(b.author));

				case "category":
					return sortedBooks.sort((a, b) => a.category.ID - b.category.ID);

				case "isbn":
					return sortedBooks.sort((a, b) => a.isbn - b.isbn);
			}

			return sortedBooks;
		}

		function generateId(arr) {
			let result;
			let length = arr.length + 1

			if(arr === books) {
				result = "b_" + length;
			} else {
				result = "c_" + length;
			}

			return result;
		}

		function findBookByTitle(title) {
			const findBook = books.find((book) => book.title === title);
			const isFound = findBook ? true : false;

			if(isFound) {
				throw new Error ("Such title already exists.");
			}

			return isFound;
		}

		/*
		function findBookByAuthor(author) {
			const findAuthor = books.find((book) => book.author === author);
			const isFound = findAuthor ? true : false;

			return isFound;
		}
		*/

		function findCategoryByName(name) {
			const findCategory = categories.find((category) => category.name === name);
			const isFound = findCategory ? true : false;

			return isFound;
        } 

		function validateInput(input, minLength, maxLength) {
			if(typeof input != "string" || input.length < minLength || input.length > maxLength) {
				throw new Error (`The input does not match the required length (between ${minLength} and ${maxLength} characters)`)
			}
		}

		function validateISBN(input) {
			const regex = /(^\d{10}$|^\d{13}$)/;

            if(regex.test(input)) {
                const findIsbn = books.find((book) => book.isbn === input)
                const isExisting = findIsbn ? true : false;
                if(isExisting) {
                    throw new Error ("Such ISBN already exists.")
                }
        	} else {
                   throw new Error ("The ISBN does not match the requirements.")
            }	
		}

		function addCategory(categoryName) {
			validateInput(categoryName, 2, 100);

            category = {
                ID: generateId(categories),
                name: categoryName
            }
            
            categories.push(category);
			console.log("New category has been added!");
            return(category);
        }
		
		function addBook(book) {
			validateInput(book.title, 2, 100);
			validateInput(book.author, 1, Infinity);
			validateISBN(book.isbn);

			const bookExists = findBookByTitle(book.title);
			if(bookExists) {
				throw new Error ("This book has already been added.");
			} 

			/*
			const authorExists = findBookByAuthor(book.author);
			if(authorExists) {
				throw new Error ("This author has already been added.");
			}
			*/

			const categoryExists = findCategoryByName(book.category);
			if(!categoryExists) {
				addCategory(book.category)
			}
            
			book.ID = generateId(books);
			books.push(book);
			return book;
		}

		function listCategories() {
			let sortedCategories = [...categories].sort((a, b) => a.ID - b.ID);

			return sortedCategories;
		}

		/*
		addBook({title: "Book1", author: "Author1", isbn: 1579840634, category: "Category1"});
		addBook({title: "Book2", author: "Author2", isbn: 1577473063, category: "Category2"});
		addBook({title: "Book3", author: "Author3", isbn: 2395179840636, category: "Category1"});
		*/
		
		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());

	return library;
}
module.exports = solve;
