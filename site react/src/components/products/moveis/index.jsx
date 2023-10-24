import './moveis.css'
const moveis = (props)=>{
    return (
        <div className='moveis'>
            <img src={props.image} alt={props.title} />
            <h3 className='title poppins'>{props.title}</h3>
            <p className='description poppins'>{props.description}</p>
            <div className='prices'>
                <p className='price poppins'>{props.price}</p>
                <p className='realPrice poppins'>{props.realPrice}</p>
            </div>
            
        </div>
    )
}
export default moveis;