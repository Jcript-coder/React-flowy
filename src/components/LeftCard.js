import BlockList from './BlockList';
import CloseCard from './CloseCard';
import SearchBar from './SearchBar';
import {useState} from 'react';

import SubNav from './SubNav'
const LeftCard =(props)=>{
    const [activeItem,setActive]=useState("navactive side");
    const [disabledItem,setDisabled]=useState("navdisabled");

    return(
        <>
        <div id={props.id}>
            <CloseCard id="closecard"/>
            <p id="header">Blocks</p>
            <SearchBar />
            <SubNav />
            <BlockList activeItem={activeItem} disabledItem={disabledItem}/>
            
        </div>

        </>
    )
}
export default LeftCard;