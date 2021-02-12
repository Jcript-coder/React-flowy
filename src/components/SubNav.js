
import Triggers from './Triggers';
import ActionBar from './ActionBar';
import LoggerBar from './LoggerBar';
import {Switch,Route} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import BlockList from './BlockList';

const SubNav=()=>{
        return(
            <div id="subnav">
              <Triggers isActive={true}/>
              <ActionBar isActive={true}/>
              <LoggerBar isActive={true}/>
            </div>
        )
}

export default SubNav;