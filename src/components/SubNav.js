
import Triggers from './Triggers';
import ActionBar from './ActionBar';
import LoggerBar from './LoggerBar';


const SubNav=()=>{
        return(
            <div id="subnav">
              <Triggers id="triggers" className="navactive side"/>
              <ActionBar id="actions" className="navdisabled" />
              <LoggerBar id="loggers" className="navdisabled"/>
            </div>
        )
}

export default SubNav;