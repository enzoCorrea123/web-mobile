import './house.css';
import Cards from './card/index'
const house = ()=>{
    return (
        <section>
            <div className='browse'>
                <h2 className='poppins h2'>Browse The Range</h2>
                <p className='poppins p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='cards'>
                <Cards image="/src/assets/dinning.png" text="Dining"/>
                <Cards image="/src/assets/living.png" text="Living"/>
                <Cards image="/src/assets/bedroom.png" text="Bedroom"/>
            </div>
        </section>
    )
    
}
export default house;