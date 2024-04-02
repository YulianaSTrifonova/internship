import { solve } from "./library.js";
window.solution = solve();

solution.books.add({
  title: "Book1",
  author: "Author1",
  isbn: 1579840634,
  category: "Category1",
});
solution.books.add({
  title: "Book2",
  author: "Author2",
  isbn: 1577473063,
  category: "Category2",
});
solution.books.add({
  title: "Book3",
  author: "Author3",
  isbn: 2395179840636,
  category: "Category1",
});

console.log(solution.books.list());
