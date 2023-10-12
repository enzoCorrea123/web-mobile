import './header.css'
const headerSite = ()=>{
    return(
        <div className='bg-black'> 
            <img src="./public/logo.png" alt="logo"  />
            <h1 className="text-4xl font-bold underline">Furniro</h1>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <img src="./public/carinha.png" alt="user" />
            <img src="./public/lupa.png" alt="lupa" />
            <img src="./public/coracao.png" alt="coracao" />
            <img src="./public/carrinho.png" alt="carrinho" />
        </div>
        
    )
    
}
export default headerSite;