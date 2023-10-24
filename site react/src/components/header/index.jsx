import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const headerSite = ()=>{
    return(
    <header className='header-flex'>
        <div className='img-furniro'>
            <img src="./public/logo.png" alt="logo" className='logo' />
            <h1 className='furniro'>Furniro</h1>
        </div>
        <nav className='poppins nav-flex'>
            <a className='bold' >Home</a>
            <a className='bold' >Shop</a>
            <a className='bold' >About</a>
            <a className='bold' >Contact</a>
        </nav>
        <div className="nav-flex">
            <FontAwesomeIcon icon={faUser} className='bigger-icon'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='bigger-icon'/>
            <FontAwesomeIcon icon={faHeart} className='bigger-icon'/>
            <FontAwesomeIcon icon={faCartShopping} className='bigger-icon'/>
        </div>
</header>
        
    )
    
}
export default headerSite;