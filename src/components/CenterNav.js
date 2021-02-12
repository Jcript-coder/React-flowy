import {useState} from 'react';

const CenterNav=()=>{
    const[leftSwitch,setLeftSwitch]=useState('Diagram View');
    const [rightSwitch,setRightSwitch]=useState('Code Editor');

    return(
        <>
        <div id="centerswitch">
            <div id="leftswitch">{leftSwitch}</div>
            <div id="rightswitch">{rightSwitch}</div>
        </div>
        </>
    )
}
export default CenterNav;