import React, { Component } from 'react';

class Home extends Component {
  state = {
    books: [
      { id: 1, title: 'Introduction of Ibn Khaldun', author: 'Ibn Khaldun', isbn: '1289499030' },
      { id: 2, title: 'Al-Hawi in Medicine', author: 'Abu Bakr al-Razi', isbn: '893847239479' },
      { id: 3, title: 'The Book of Sibawayh', author: 'Sibawayh', isbn: '1234567890' },
      { id: 4, title: 'History of Al-Tabari', author: 'Al-Tabari', isbn: '8765432109' },
      { id: 5, title: 'The Muqaddimah', author: 'Ibn Khaldun', isbn: '9876543210' },
      { id: 6, title: 'The Canon of Medicine', author: 'Ibn Sina', isbn: '1928374650' },
      { id: 7, title: 'Kitab al-Ibar', author: 'Ibn Khaldun', isbn: '1112223334' },
      { id: 8, title: 'Al-Muwatta', author: 'Malik ibn Anas', isbn: '4445556667' },
      { id: 9, title: 'Kitab al-Kimya', author: 'Jabir ibn Hayyan', isbn: '5556667778' },
      { id: 10, title: 'Deliverance from Error', author: 'Al-Ghazali', isbn: '2233445566' },
      { id: 11, title: 'The Fihrist', author: 'Ibn al-Nadim', isbn: '7788990011' },
      { id: 12, title: 'The Incoherence of the Philosophers', author: 'Al-Ghazali', isbn: '9988776655' },
      { id: 13, title: 'Book of Optics', author: 'Ibn al-Haytham', isbn: '5647382910' },
      { id: 14, title: 'Rings of Saturn', author: 'Al-Biruni', isbn: '1122334455' },
      { id: 15, title: 'Kitab al-Masalik wa al-Mamalik', author: 'Ibn Hawqal', isbn: '6677889900' }

    ]
  };

  render() {
    return (
      <main style={{ padding: '20px', fontFamily:'Popins'}}>
        <h2>Book List</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {this.state.books.map((book) => (
            <div key={book.id} style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px' }}>
              <h3>{book.title}</h3>
              <p>Author: {book.author}</p>
              <p>ISBN: {book.isbn}</p>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Home;
