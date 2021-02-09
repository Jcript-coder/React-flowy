import {useState} from 'react';
import Triggers from './Triggers';
import ActionBar from './ActionBar';
import LoggerBar from './LoggerBar';


const SubNav=()=>{
        return(
            <div id="subnav">
                <Triggers />
                <ActionBar />
                <LoggerBar />
            </div>
        )
}

export default SubNav;