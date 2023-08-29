import { FaHome } from "react-icons/fa";
import Search from './search'
import './header.scss';


const Header = () => {
    return (<>
        <header className='header'>
            <div className='header__logo'>
                <FaHome />
            </div>
            <div className='header__text'>
                <h1>toDoList</h1>
            </div>
            <Search />

        </header>
    </>)

}

export default Header