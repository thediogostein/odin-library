const grid = document.querySelector('.grid');
const btnNewBook = document.querySelector('#btn-new-book');
const dialog = document.querySelector('dialog');
const btnDialogClose = document.querySelector('#dialog__closeBtn');
const form = document.querySelector('#form');
let btnRemoveBook = '';

const myLibrary = [
  // {
  //   title: 'Title A',
  //   author: 'Author A',
  //   pages: 100,
  //   read: false,
  // },
  // {
  //   title: 'Title B',
  //   author: 'Author B',
  //   pages: 100,
  //   read: false,
  // },
  // {
  //   title: 'Title C',
  //   author: 'Author C',
  //   pages: 100,
  //   read: false,
  // },
  // {
  //   title: 'Title D',
  //   author: 'Author D',
  //   pages: 100,
  //   read: false,
  // },
];

// || FUNCTIONS

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function displayBook() {
  const lastItem = myLibrary[myLibrary.length - 1];
  const card = document.createElement('article');
  const cardTitle = document.createElement('h2');
  const cardAuthor = document.createElement('p');
  const cardPages = document.createElement('p');
  const cardRead = document.createElement('p');
  btnRemoveBook = document.createElement('button');

  card.classList.add('card');
  card.dataset.cardIndex = cardTitle.classList.add('card__title');
  cardAuthor.classList.add('card__author');
  cardPages.classList.add('card__pages');
  cardRead.classList.add('card__read');
  btnRemoveBook.classList.add('card___btnRemove');

  cardTitle.innerText = lastItem.title;
  cardAuthor.innerText = lastItem.author;
  cardPages.innerText = lastItem.pages;
  cardRead.innerText = lastItem.read;
  btnRemoveBook.innerText = 'Remove book';

  grid.append(card);
  card.append(cardTitle);
  card.append(cardAuthor);
  card.append(cardPages);
  card.append(cardRead);
  card.append(btnRemoveBook);

  btnRemoveBook.addEventListener('click', () => {
    console.log('teste');
  });
}

function addBookToLibrary(title, author, nrPages, haveRead) {
  const book = new Book(title, author, nrPages, haveRead);
  myLibrary.push(book);
  displayBook();
}

function removeBook() {}

// || EVENT LISTENERS

btnNewBook.addEventListener('click', () => {
  dialog.showModal();
});

form.addEventListener('submit', (e) => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const nrPages = document.querySelector('#nr-of-pages').value;
  let haveRead = document.querySelector('#have-read');
  const isHaveReadChecked = haveRead.checked;
  if (isHaveReadChecked) {
    haveRead = 'read';
  } else {
    haveRead = 'not read';
  }
  addBookToLibrary(title, author, nrPages, haveRead);
  form.reset();
  dialog.close();
  e.preventDefault();
});

btnDialogClose.addEventListener('click', () => {
  dialog.close();
});
