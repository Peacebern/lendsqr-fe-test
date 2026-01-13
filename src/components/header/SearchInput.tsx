import searchicon from "assets/figma/search.svg"

/** UI Component */
const SearchInput = () => {
  return (
    <div className="search" data-testid="search-input">
      <input type="text" name="search" id="srch" placeholder="Search for anything" style={{ opacity: 0.70, color: '#545F7D', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word' }} />
      <button>
        <img src={searchicon} alt="search_icon" className="searchImage" />
      </button>
    </div>
  )
}

export default SearchInput