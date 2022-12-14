import './SearchBar.css';
import React, { useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchImg from '../img/SearchImg.svg';


function SearchBar() {
    const inputRef = useRef();
    const navigate = useNavigate();

    // durch diese Funktion leitet auf die seite discover/search/{suchbegriff} weiter
    const handleOnClick = useCallback(() => navigate(`/discover/search/${inputRef.current.value}`, { replace: true }), [navigate]);

    return (
        <div className="Searchbar-Container">
            <input ref={inputRef} type="text" className="input" placeholder="Suche" onKeyDown={(e) => e.key === "Enter" ? handleOnClick() : ""}></input>
            <button onClick={() => handleOnClick()} type="submit"><img src={SearchImg} alt="SuchLupe" className="fa Searchbar-Img"></img></button>

        </div>
    );
};




export default SearchBar;