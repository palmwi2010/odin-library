let myLibrary = [];


class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = false;
    }

    get_description() {
        console.log(console.log(`Book titled ${this.title} has ${this.pages} pages.`))
    }

    toggleRead() {
        this.read = !this.read;
    }

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

// Add initial books to list
let myBook = new Book('Lord of the Rings', 'JRR Tolkien', 250);
let myBook2 = new Book('Of Mice and Men', 'John Steinbeck', 450);
let myBook3 = new Book("Hitchiker's Guide to the Galaxy", 'Stephen Hawking', 333); 

addBookToLibrary(myBook);
addBookToLibrary(myBook2);
addBookToLibrary(myBook3);

// Function to add user specified books to list
function addUserBookToLibrary(event) {

    // Prevent form submission
    event.preventDefault();

    // Get content
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;

    if (title != '' && author != '' && pages != '') {
        let newBook = new Book(title, author, pages);
        addBookToLibrary(newBook);
        refreshBooks();
    }

    // Clear text
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#title').focus();

    // Close modal
    document.querySelector('.dialog-box').close();
}

function createCard(book, i) {

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
    pagesLine.innerText = `${book.pages} pages`

    // Create body div
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Add delete icon
    let deleteIcon = document.createElement('img');
    deleteIcon.classList.add('delete');
    deleteIcon.setAttribute('src', 'close.svg');
    deleteIcon.setAttribute('data-attribute', i);

    deleteIcon.addEventListener('click', e => {
        let index = e.target.dataset.attribute;
        myLibrary.splice(index, 1);
        refreshBooks();
    })

    // Add read corner sticker
    let readSticker = document.createElement('div');
    readSticker.classList.add('sticker');
    let stickerText = document.createElement('p');
    stickerText.classList.add('sticker-text');

    if (book.read) {
        readSticker.classList.add('read');
        stickerText.innerText = 'Read';
    } else {
        readSticker.classList.add('unread');
        stickerText.innerText = 'Unread';
    }

    let changeRead = document.createElement('img');
    changeRead.classList.add('change-read');
    changeRead.setAttribute('src', 'reload.svg')
    changeRead.setAttribute('data-attribute', i);

    changeRead.addEventListener('click', e => {
        let index = e.target.dataset.attribute;
        myLibrary[index].toggleRead();
        refreshBooks();
    })

    readSticker.appendChild(stickerText);
    readSticker.appendChild(changeRead);
    

    // Add to card body
    cardBody.appendChild(titleLine);
    cardBody.appendChild(authorLine);
    cardBody.appendChild(pagesLine);

    // Add to card div
    newCard.appendChild(img);
    newCard.appendChild(cardBody);
    newCard.appendChild(deleteIcon);
    newCard.appendChild(readSticker);

    return newCard;
}

function deleteCard(e) {
    document.qu
}

function refreshBooks() {
    const container = document.querySelector('.card-area');
    container.innerHTML='';

    for (let i = 0; i < myLibrary.length; i++) {
        let card = createCard(myLibrary[i], i);
        container.appendChild(card);
    }
}

refreshBooks();

// Button to add new book
const button = document.querySelector('#submit-btn');
button.addEventListener('click', addUserBookToLibrary);

// Button to create popup
const popupBtn = document.querySelector('#popup-btn')
popupBtn.addEventListener('click', e=> {
    const popup = document.querySelector('.dialog-box');
    popup.showModal();
})

// Button to toggle read status
let changeReadBtns = document.querySelectorAll('.change-read');



