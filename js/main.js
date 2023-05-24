// GLOBAL VARIABLES
const addNewBook = document.querySelector('#btn-new-book');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('.form');
const formCancel = document.querySelector('#form-cancel');
let outputEl = document.querySelector('#output-el');

let myLibrary = [
  // {
  //   title: 'Modern Computer Architecture and Organization',
  //   author: 'Jim Ledin and Dave Farley',
  //   pages: 666,
  //   read: false,
  // },
  // {
  //   title:
  //     "React Key Concepts: Consolidate your knowledge of React's core features",
  //   author: 'Maximilian Schwarzmuller',
  //   pages: 590,
  //   read: true,
  // },
  // {
  //   title:
  //     "JavaScript - The Definitive Guide: Master the World's Most-Used Programming Language",
  //   author: 'David Flanagan ',
  //   pages: 704,
  //   read: true,
  // },
  // {
  //   title:
  //     'Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming ',
  //   author: 'Marijn Haverbeke',
  //   pages: 472,
  //   read: false,
  // },
];

// EVENT LISTENERS
addNewBook.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearGrid();
  addBookToLibrary();
  displayOnPage(myLibrary);
  form.reset();
  dialog.close();
});

formCancel.addEventListener('click', () => {
  dialog.close();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function clearGrid() {
  outputEl.innerHTML = '';
}

function addBookToLibrary() {
  const title = document.querySelector('#form-title').value;
  const author = document.querySelector('#form-author').value;
  const pages = document.querySelector('#form-pages').value;
  let read = document.querySelector('#form-read');
  const readIsChecked = read.checked;

  if (readIsChecked) {
    read = 'Read';
  } else {
    read = 'Not read';
  }
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayOnPage() {
  myLibrary.forEach((book) => {
    const title = book.title;
    const author = book.author;
    const pages = book.pages;
    const read = book.read;
    appendElements(title, author, pages, read);
  });
}

function appendElements(title, author, pages, read) {
  const articleEl = document.createElement('article');
  const titleEl = document.createElement('h2');
  const authorEl = document.createElement('p');
  const pagesEl = document.createElement('p');
  const readEl = document.createElement('p');

  titleEl.innerText = title;
  authorEl.innerText = author;
  pagesEl.innerText = pages;
  readEl.innerText = read;

  articleEl.classList.add('card');
  titleEl.classList.add('card__title');
  authorEl.classList.add('card__author');
  readEl.classList.add('card__read');

  outputEl.append(articleEl);
  articleEl.append(titleEl);
  articleEl.append(authorEl);
  articleEl.append(pagesEl);
  articleEl.append(readEl);
}
