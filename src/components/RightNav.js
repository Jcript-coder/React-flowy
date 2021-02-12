import {useState} from 'react';

const RightNav=()=>{
    const [discard,setDiscard]=useState('Discard');
    const[publish,setPublish]=useState('Publish to site')
    return(
        <>
            <div id="buttonsright">
            <div id="discard">{discard}</div>
            <div id="publish">{publish}</div>
        </div>
        </>
    )
}

export default RightNav;