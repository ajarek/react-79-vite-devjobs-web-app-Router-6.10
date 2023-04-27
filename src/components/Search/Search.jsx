import React from 'react'
import './Search.css'

const Search = ({ onSubmit }) => {
  return (
    <form
      className='search'
      onSubmit={onSubmit}
    >
      <div className='filter-title'>
        <div className='icon'>
          <img
            src='/src/assets/desktop/icon-search.svg'
            alt='icon'
          />
        </div>
        <input
          type='text'
          placeholder='Filter by title'
          name='title'
        />
      </div>
      <div className='filter-location'>
        <div className='icon'>
          <img
            src='/src/assets/desktop/icon-location.svg'
            alt='icon'
          />
        </div>
        <input
          type='text'
          placeholder='Filter by location'
          name='location'
        />
      </div>
      <div className='filter-full-time'>
        <input
          type='checkbox'
          name='full-time'
        />
        Full Time
      </div>
      <div className='button-submit'>
        <button type='submit'>Search</button>
      </div>
    </form>
  )
}

export default Search
