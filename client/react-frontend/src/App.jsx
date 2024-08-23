import { useEffect, useState } from 'react';
import './assets/scss/app.scss';

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [releaseYear, setReleaseYear] = useState(0);
  const [newTitle, setNewTitle] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/');
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBook = async () => {
    const bookData = { title, release_year: releaseYear };
    try {
      const response = await fetch('http://127.0.0.1:8000/api/books/create/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) => [...prev, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const editTitle = async (pk, release_year) => {
    const bookData = { title: newTitle, release_year };
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${pk}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData),
      });
      const data = await response.json();
      setBooks((prev) =>
        prev.map((book) => (book.id === pk ? data : book))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const confirmDeleteBook = (book) => {
    setBookToDelete(book);
    setShowModal(true);
  };

  const deleteBook = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/books/${bookToDelete.id}/`, {
        method: 'DELETE',
      });
      if (response.status === 204) {
        setBooks((prev) => prev.filter((book) => book.id !== bookToDelete.id));
        setShowModal(false);
      } else {
        console.log("Failed to delete the book");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center mt-8 mb-10">CRUD Python + React</h1>

      <div className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg mb-10 mx-auto w-full max-w-md">
        <input
          type="text"
          placeholder="Book Title..."
          className="p-3 mb-4 w-full rounded-lg border border-gray-400 focus:outline-none focus:border-gray-600"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Release Date..."
          className="p-3 mb-4 w-full rounded-lg border border-gray-400 focus:outline-none focus:border-gray-600"
          onChange={(e) => setReleaseYear(e.target.value)}
        />
        <button
          className="bg-black text-white p-3 w-full rounded-lg hover:bg-gray-700 transition duration-300"
          onClick={addBook}
        >
          Add Book
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {books.map((book, index) => (
          <div key={book.id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:-translate-y-1 transition duration-300 book-item">
            <p className="text-xl font-bold book-title mb-2">Title: {book.title}</p>
            <p className="text-gray-400 mb-4">Release Year: {book.release_year}</p>
            <input
              type="text"
              placeholder="Edit Title..."
              className="p-2 mb-4 w-full rounded-lg border border-gray-400 focus:outline-none focus:border-gray-600"
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <div className="flex justify-between">
              <button
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                onClick={() => editTitle(book.id, book.release_year)}
              >
                Change
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                onClick={() => confirmDeleteBook(book)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="mb-4">Are you sure you want to delete <strong>{bookToDelete.title}</strong>?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                onClick={deleteBook}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition duration-300"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
