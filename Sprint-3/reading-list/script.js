let listOutput = document.getElementById("reading-list");

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

listOutput.innerHTML = `<ul>
        <div class="container"><h2>${books[0].title} by ${books[0].author}</h2> <img src="${books[0].bookCoverImage}"> </div>
        <div class="container"><h2>${books[1].title} by ${books[1].author}</h2> <img src="${books[1].bookCoverImage}"></div>
        <div class="container"><h2>${books[2].title} by ${books[2].author}</h2> <img src="${books[2].bookCoverImage}"></div>
      </ul>`;

// for the tests, do not modify this array of books
