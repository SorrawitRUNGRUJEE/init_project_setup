import { FaSearch } from "react-icons/fa";
import './search.scss';


const Search = () => {
    return(<>
    <div className='header__search'>
<div className="search">
    <span className="search__icon">
        <FaSearch />
    </span>
    <input placeholder="search" type="text" className="search__input" />

</div>
</div>    
    
    
    </>)
}

export default Search