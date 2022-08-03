import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './search.css'

function Search() {
    let navigate = useNavigate();
    const [word,setWord] = useState("");

    const SearchWord = (e:any)=> {
            e.preventDefault();
            console.log("submitted");
            navigate("/Results", {state:{word:word}})
    }
  return (
    <>
    <div>
      <div>
        <div className="heading">
            Dictionary App
        </div>
        <div  className='search'>
          <input
           id="search-text-input"
            type="text"
            className=" "
            placeholder="Type your word"
            onChange={(e)=>setWord(e.target.value)}
          />
          <button id="search-submit-button"  onClick={SearchWord}>
            Search
          </button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Search