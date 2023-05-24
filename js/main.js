// GLOBAL VARIABLES
const addNewBook = document.querySelector('#btn-new-book');
const dialog = document.querySelector('.dialog');
const form = document.querySelector('.form');
const formCancel = document.querySelector('#form-cancel');
let outputEl = document.querySelector('#output-el');

let myLibrary = [];

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

  this.changeReadStatus = function () {
    if (this.read === 'Read') {
      this.read = 'Not read';
    } else {
      this.read = 'Read';
    }
  };
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
  myLibrary.forEach((book, index) => {
    createElements(book, index);
  });
}

function createElements(book, index) {
  const articleEl = document.createElement('article');
  const contentDiv = document.createElement('div');
  const titleEl = document.createElement('h2');
  const authorEl = document.createElement('p');
  const pagesEl = document.createElement('p');
  const readEl = document.createElement('p');
  const btnsDiv = document.createElement('div');
  const btnRemoveEl = document.createElement('button');
  const btnReadStatusEl = document.createElement('button');

  titleEl.innerText = book.title;
  authorEl.innerText = book.author;
  pagesEl.innerText = `${book.pages} pages`;
  readEl.innerText = book.read;
  btnReadStatusEl.innerText = 'Change read status';
  btnRemoveEl.innerText = 'Remove book';

  articleEl.classList.add('card');
  titleEl.classList.add('card__title');
  authorEl.classList.add('card__author');
  pagesEl.classList.add('card__pages');
  readEl.classList.add('card__read');
  btnRemoveEl.classList.add('card__btn', 'card__btn--remove');
  btnReadStatusEl.classList.add('card__btn', 'card__btn--status');

  contentDiv.append(titleEl, authorEl, pagesEl, readEl);
  btnsDiv.append(btnReadStatusEl, btnRemoveEl);
  articleEl.append(contentDiv, btnsDiv);
  outputEl.append(articleEl);

  btnRemoveEl.addEventListener('click', () => {
    myLibrary.splice(index, 1);
    clearGrid();
    displayOnPage();
  });

  btnReadStatusEl.addEventListener('click', () => {
    book.changeReadStatus();
    clearGrid();
    displayOnPage();
  });
}
