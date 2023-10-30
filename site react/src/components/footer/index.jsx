import './footer.css'
const footer = ()=>{
    return(
        <div>
            <div className='footer'>
                <div>
                    <h2 className='padding'>Furniro.</h2>
                    <p className='university'>400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
                </div>

                <div>
                    <p className='padding little-title'>Links</p>
                    <div className='flex-footer'>
                        <p className='txt-footer'>Home</p>
                        <p className='txt-footer'>Shop</p>
                        <p className='txt-footer'>About</p>
                        <p className='txt-footer'>Contact</p>
                    </div>
                </div>
                <div>
                    <p className='padding little-title'>Help</p>
                    <div className='flex-footer'>
                        <p className='txt-footer'>Payment Options</p>
                        <p className='txt-footer'>Returns</p>
                        <p className='txt-footer'>Private policies</p>
                    </div>
                </div>

                <div>
                    <p className='padding little-title'>Newsletter</p>
                    <input type="text" placeholder='Enter your Email address' className='footer-input'/>
                    <a href="#" className='footer-button'>Subscribe</a>
                </div>
            </div>

            <hr/>
            <p className='last-txt'>2023 furino. All rights reverved</p>
            
        </div>
    )
}
export default footer;