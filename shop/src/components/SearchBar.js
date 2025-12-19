import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') onSearch(text);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="원하시는 상품을 입력하세요"
          style={{
            width: '400px',
            padding: '15px 20px',
            borderRadius: '30px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        />
        <button
          type="submit"
          style={{
            marginLeft: '10px',
            padding: '15px 30px',
            borderRadius: '30px',
            border: 'none',
            background: '#fff',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          검색
        </button>
      </form>
    </div>
  );
}

export default SearchBar;