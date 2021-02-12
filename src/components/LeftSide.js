import arrowNav from '../assets/arrow.svg';
import {useState} from 'react';

const LeftSide=()=>{
     const [title,setTitle] =useState('Your automation pipleline');
     const [subTitle,setSubTitle]=useState('Marketing automation');

    return(
        <>
            <div id="leftside">
            <div id="details">
            <div id="back"><img src={arrowNav} alt="missing logo" />
            </div>
            <div id="names">
                <p id="title">{title}</p>
                <p id="subtitle">{subTitle}</p>
            </div>
            </div>            
            </div>
        </>
    )
}

export default LeftSide;