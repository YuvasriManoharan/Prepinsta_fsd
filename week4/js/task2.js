document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('add-book-form');
    const bookList = document.getElementById('book-list');
    const searchInput = document.getElementById('search');
    const searchButton = document.getElementById('search-button');
  
    let books = [];
  
    // Add book event listener
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value.trim();
      const author = document.getElementById('author').value.trim();
      const pages = document.getElementById('pages').value.trim();
      const genre = document.getElementById('genre').value.trim();
  
      if (title && author && pages && genre) {
        books.push({ title, author, pages, genre });
        displayBooks(books);
        bookForm.reset();
      } else {
        alert('Please fill in all required fields.');
      }
    });
  
    // Search event listeners
    searchInput.addEventListener('input', handleSearch);
    searchButton.addEventListener('click', handleSearch);
  
    // Function to handle search
    function handleSearch() {
      const searchValue = searchInput.value.toLowerCase();
      const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchValue)
      );
      displayBooks(filteredBooks);
    }
  
    // Function to display books
    function displayBooks(books) {
      bookList.innerHTML = '';
  
      if (books.length === 0) {
        bookList.innerHTML = '<p>No books found matching your search criteria.</p>';
        return;
      }
  
      books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
  
        bookElement.innerHTML = `
          <h3>${book.title}</h3>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Pages:</strong> ${book.pages}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
        `;
  
        bookList.appendChild(bookElement);
      });
    }
  });
  