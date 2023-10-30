import './benefits.css'
import Quality from './quality';
const benefits = ()=>{
    return(
        <div className='flex'>
            <Quality images = '/src/assets/trophy.png' title='High quality' description='crafted from top materials'/>
            <Quality images = '/src/assets/guarantee.png' title='Warranty Protection' description='Over 2 years'/>
            <Quality images = '/src/assets/shipping.png' title='Free Shipping' description='Order over 150 $'/>
            <Quality images = '/src/assets/customer.png' title='24 / 7 Support' description='Dedicated support'/>
        </div>
    )
}
export default benefits;
