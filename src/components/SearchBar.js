import searchIcon from '../assets/search.svg';

const SearchBar=()=>{
    return(
        <div id="search">
                <img src={searchIcon}/>
                <input type="text" placeholder="Search blocks"/>
        </div>
    )
}

export default SearchBar;