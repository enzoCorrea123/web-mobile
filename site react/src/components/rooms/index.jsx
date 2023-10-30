import './rooms.css';
const rooms = ()=>{
    return(
        <div className='room'>
            <div className='texts'>
                <h1 className='poppins h1-room'>50+ Beautiful rooms inspiration</h1>
                <p className='poppins p-room'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                <a href="#" className='explore-more poppins'> Explore more</a>
            </div>

            <img src="/src/assets/bedroom1.png" alt="Bed Room" className='bedroom1' />
            
            <div className='div-radios'>
                <img src="/src/assets/bedroom2.png" alt="Bed Room 2" className='bedroom2'/>
                <div className='radio'>
                <label class="container">
                    <input type="radio" checked="checked" name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span>
                </label>
                <label class="container">
                    <input type="radio" name="radio"/>
                    <span class="checkmark"></span>
                </label>
                </div>
                <div className='absolute'>
                    <img src="/src/assets/right.png" alt="arrow" />
                </div>
            </div>
            
        </div>
    )
}

export default rooms;