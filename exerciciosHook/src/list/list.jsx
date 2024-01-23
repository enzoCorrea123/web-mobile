import './list.css';
function list({ list }){
    return (
        <ul className='ul'>
            {list.map((item, index) => (
                <li key={index} className='list'>{item}</li>
            ))}
        </ul>
    )
}
export default list;