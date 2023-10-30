import './products.css'
import Moveis from './moveis/index';
const products = ()=>{
    return (
        <section>
            <h2 className='h2'>Our Products</h2>
            <div className='products'>
                <Moveis image="/src/assets/syltherine.png" title="Syltherine" description="Stylish cafe chair" price="Rp 2.500.000" realPrice="Rp 3.500.000"/>
                <Moveis image="/src/assets/leviosa.png" title="Leviosa" description="Stylish cafe chair" price="Rp 2.500.000" realPrice=""/>
                <Moveis image="/src/assets/lolito.png" title="Lolito" description="Luxury big sofa" price="Rp 7.500.000" realPrice="Rp 14.000.000"/>
                <Moveis image="/src/assets/respira.png" title="Respira" description="Outdoor bar table and stool" price="Rp 500.000" realPrice=""/>
            </div>
            <div className='products'>
                <Moveis image="/src/assets/grifo.png" title="Grifo" description="night lamp" price="Rp 1.500.000" realPrice=""/>
                <Moveis image="/src/assets/muggo.png" title="Muggo" description="Small mugg" price="Rp 150.000" realPrice=""/>
                <Moveis image="/src/assets/pingky.png" title="Pingky" description="cute bed set" price="Rp 7.000.000" realPrice="Rp 14.000.000"/>
                <Moveis image="/src/assets/potty.png" title="Potty" description="Minimalist flower pot" price="Rp 500.000" realPrice=""/>
            </div>
            <a href="#" className='a-button'>Show more</a>
        </section>

    )
}
export default products