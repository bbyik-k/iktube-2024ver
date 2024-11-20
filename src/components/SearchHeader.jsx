import React, { useEffect, useState } from 'react';
import { FaYoutube, FaSearch } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
  const navigate = useNavigate();
  const { keyword } = useParams();
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`videos/${text}`);
  };
  useEffect(() => setText(keyword || ''), [keyword]);
  return (
    <header>
      <Link to='/'>
        <FaYoutube />
        <h1>Iktube</h1>
      </Link>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} />
        <button>
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
