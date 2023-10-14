import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
const headerSite = ()=>{
    return(
    <header className='flex items-center justify-between w-full h-24 py-7 pl-14 pr-24 '>
    <div className='flex items-center gap-2'>
        <img src="./public/logo.png" alt="logo"  />
        <h1 className='text-4xl font-bold font-montserrat'>Furniro</h1>
    </div>
    <nav className='flex items-center justify-between w-96'>
        <a className='text-base font-medium' >Home</a>
        <a className='text-base font-medium' >Shop</a>
        <a className='text-base font-medium' >About</a>
        <a className='text-base font-medium' >Contact</a>
    </nav>
    <div className="flex items-center justify-between w-60">
        <FontAwesomeIcon icon={faUser} size='xl' />
        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' />
        <FontAwesomeIcon icon={faHeart} size='xl' />
        <FontAwesomeIcon icon={faCartShopping} size='xl' />
    </div>
</header>
        
    )
    
}
export default headerSite;