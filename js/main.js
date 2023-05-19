const grid = document.querySelector('.grid');
const btnNewBook = document.querySelector('#btn-new-book');

btnNewBook.addEventListener('click', () => {
  alert('teste');
});

let myLibrary = [
  {
    title: 'Title A',
    author: 'Author A',
    pages: 100,
    read: false,
  },
  {
    title: 'Title B',
    author: 'Author B',
    pages: 100,
    read: false,
  },
  {
    title: 'Title C',
    author: 'Author C',
    pages: 100,
    read: false,
  },
  {
    title: 'Title D',
    author: 'Author D',
    pages: 100,
    read: false,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i += 1) {
    const card = document.createElement('article');
    const cardTitle = document.createElement('h2');
    const cardAuthor = document.createElement('p');
    const cardPages = document.createElement('p');
    const cardRead = document.createElement('p');

    card.classList.add('card');
    cardTitle.classList.add('card__title');
    cardAuthor.classList.add('card__author');
    cardPages.classList.add('card__pages');
    cardRead.classList.add('card__read');

    cardTitle.innerText = myLibrary[i].title;
    cardAuthor.innerText = myLibrary[i].author;
    cardPages.innerText = myLibrary[i].pages;
    cardRead.innerText = myLibrary[i].read;

    grid.append(card);
    card.append(cardTitle);
    card.append(cardAuthor);
    card.append(cardPages);
    card.append(cardRead);
  }
}

displayBooks();
