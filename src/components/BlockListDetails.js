import grabMeImage from '../assets/grabme.svg'
import eyeImage from '../assets/eye.svg';
import errorImage from '../assets/error.svg'
import actionImage from '../assets/action.svg';
import timeImage from '../assets/time.svg';

const FirstOption=()=>{
return(
    <div className="blockelem create-flowy noselect">
    <input type="hidden" name="blockelemtype" className="blockelemtype" value="1"/>
        <div className="grabme">
            <img src={grabMeImage}/>
        </div>
    <div className="blockin">
        <div className="blockico">
            <span></span>
            <img src={eyeImage}/>
            </div>
        <div className="blocktext">                 
            <p className="blocktitle">New visitor</p>
            <p className="blockdesc">Triggers when somebody visits a specified page</p>       
        </div>
    </div>
</div>
)
}

const SecondOption=()=>{
    return(
        <div className="blockelem create-flowy noselect">
                    <input type="hidden" name="blockelemtype" className="blockelemtype" value="2"/>
                    <div className="grabme">
                        <img src={grabMeImage}/>
                    </div>
                    <div className="blockin">                    
                        <div className="blockico">
                            <span></span>
                            <img src={actionImage}/>
                        </div>
                        <div className="blocktext">
                            <p className="blocktitle">Action is performed</p>
                            <p className="blockdesc">Triggers when somebody performs a specified action</p>
                        </div>
                    </div>
                </div>
    )
}
const ThirdOption=()=>{
    return(
        <div className="blockelem create-flowy noselect">
                    <input type="hidden" name="blockelemtype" className="blockelemtype" value="3"/>
                    <div className="grabme">
                    <img src={grabMeImage}/>
                    </div>
                    <div className="blockin">                    
                        <div className="blockico">
                            <span></span>
                            <img src={timeImage}/>
                        </div>
                        <div className="blocktext">
                        <p className="blocktitle">Time has passed</p>
                        <p className="blockdesc">Triggers after a specified amount of time</p>       
                        </div>
                    </div>
                </div>
    )
}

const FouthOption=()=>{
    return(
        <div className="blockelem create-flowy noselect">
        <input type="hidden" name='blockelemtype' className="blockelemtype" value="4"/>
        <div className="grabme">
            <img src={grabMeImage}/>
        </div>
        <div className="blockin">
            <div className="blockico">
                <span></span>
                <img src={errorImage}/>
            </div>
            <div className="blocktext">
                <p className="blocktitle">Error prompt</p>
                <p className="blockdesc">Triggers when a specified error happens</p>
            </div>
        </div>
        </div>
    )
}
const BlockListDetails=()=>{

    return(
        <>
               <FirstOption />
                <SecondOption />
                <ThirdOption />
                <FouthOption />
                
               
        </>
    )
}

export default BlockListDetails;