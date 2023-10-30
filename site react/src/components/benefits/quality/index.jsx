import './quality.css'
const quality = (props)=>{
    return(
        <div className='quality'>
            <img src={props.images} alt={props.title} />
            <div>
                <h2 className='quality-h2'>{props.title}</h2>
                <p className='quality-p'>{props.description}</p>
            </div>
        </div>
    )
}

export default quality;
