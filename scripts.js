const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.get_description = () => {
        console.log(`Book titled ${this.title} has ${this.pages} pages.`)
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Add initial books to list
let myBook = new Book('Lord of the Rings', 'JRR Tolkien', 250);
let myBook2 = new Book('Lord of the Rings', 'JRR Tolkien', 250);
let myBook3 = new Book('Lord of the Rings', 'JRR Tolkien', 250); 

addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);

// Function to add user specified books to list
function addUserBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    console.log(title);
    console.log(author);
    console.log(pages);

    if (title != '' && author != '' && pages != '') {
        let newBook = new Book(title, author, pages);
        addBookToLibrary(newBook);
        refreshBooks();
    }
}

function createCard(book) {

    // Create card    
    let newCard = document.createElement('div');
    newCard.classList.add('card');

    // Create image
    let img = document.createElement('img')
    img.setAttribute('src', 'book.png');
    img.classList.add('book-img');

    // Create title
    let titleLine = document.createElement('h3');
    titleLine.classList.add('title');
    titleLine.innerText = book.title;

    // Create author line
    let authorLine = document.createElement('p')
    authorLine.classList.add('author');
    authorLine.innerText = book.author;

    // Create pages line
    let pagesLine = document.createElement('p');
    pagesLine.classList.add('pages');
    pagesLine.innerText = `${book.pages} pages.`

    // Create body div
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Add to card body
    cardBody.appendChild(titleLine);
    cardBody.appendChild(authorLine);
    cardBody.appendChild(pagesLine);

    // Add to card div
    newCard.appendChild(img);
    newCard.appendChild(cardBody);

    return newCard;
}

function refreshBooks() {
    const container = document.querySelector('.card-area');
    container.innerHTML='';

    for (let i = 0; i < myLibrary.length; i++) {
        container.appendChild(createCard(myLibrary[i]));
    }
}

const button = document.querySelector('#submit-btn');
button.addEventListener('click', addUserBookToLibrary);

refreshBooks();