import './card.css'

const card = (props)=>{
    return (
        <div className='img-p'>
            <img src={props.image} alt={props.text} />
            <p className='poppins txt'>{props.text}</p>
        </div>
    )
}
export default card;