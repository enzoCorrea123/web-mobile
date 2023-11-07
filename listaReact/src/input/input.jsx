import './input.css';
import List from '../list/list';
import { useState } from 'react';
import { useEffect } from 'react';
function input(){
    const [list, setList] = useState([]);
    const [theme, setTheme] = useState(true);
    const handleClick = ()=>{
        let nameItem = document.getElementById("input").value;
        const spreadList = [...list];
        spreadList.push(nameItem);
        setList(spreadList);
    }
    useEffect(()=>{
        console.log('foi')
        let divMain = document.getElementById("mainDiv");
        let label = document.getElementById("label");
        let input = document.getElementById("input");
        let button = document.getElementById("button")

        divMain.classList.toggle('body-light')
        divMain.classList.toggle('body-dark')
        label.classList.toggle('label')
        label.classList.toggle('label-dark')
        input.classList.toggle('input')
        input.classList.toggle('input-dark')
        button.classList.toggle('button');
        button.classList.toggle('button-dark');
        
    },[theme])

    return(
        <div id='mainDiv' className='body-light'>
            <button onClick={()=>setTheme(!theme)}>Mudar tema</button>
            <section className='section-style'>
                <label htmlFor="list" className='label' id='label'>Digite o item</label>
                <div className='input-style'>
                    <input type="text" className='input' id='input'/>
                    <a href="#" className='button' onClick={()=>handleClick()} id='button'>Confirmar</a>
                </div>
                <List list={list}/>

            </section>
        </div>
        
        
    )
}

export default input;