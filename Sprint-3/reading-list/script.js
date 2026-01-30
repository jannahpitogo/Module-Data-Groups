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

let read = [];
let unread = [];

for (const item of books) {
  if (item.alreadyRead === true) {
    read.push(item);
  } else {
    unread.push(item);
  }
}

let readContent = "";

for (const item of read) {
  readContent += `<ul> <div class="contentRead"><h2>${item.title} by ${item.author}</h2> <img src="${item.bookCoverImage}"> </div> </ul>`;
}

let unreadContent = "";

for (const item of unread) {
  unreadContent += `<ul> <div class="container"><h2>${item.title} by ${item.author}</h2> <img src="${item.bookCoverImage}"> </div> </ul>`;
}

const finalOutput = readContent + unreadContent;

listOutput.innerHTML = finalOutput;
// for the tests, do not modify this array of books
