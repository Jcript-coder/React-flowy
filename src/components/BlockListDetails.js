


const BlockListDetails=()=>{

    return(
        <>
                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name="blockelemtype" className="blockelemtype" value="1"/>
                        <div className="grabme">
                            <img src="assets/grabme.svg"/>
                        </div>
                    <div className="blockin">
                        <div className="blockico">
                            <span></span>
                            <img src="assets/eye.svg"/>
                            </div>
                        <div className="blocktext">                 
                            <p className="blocktitle">New visitor</p>
                            <p className="blockdesc">Triggers when somebody visits a specified page</p>       
                        </div>
                    </div>
                </div>
                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name="blockelemtype" className="blockelemtype" value="2"/>
                    <div className="grabme">
                        <img src="assets/grabme.svg"/>
                    </div>
                    <div className="blockin">                    
                        <div className="blockico">
                            <span></span>
                            <img src="assets/action.svg"/>
                        </div>
                        <div className="blocktext">
                            <p className="blocktitle">Action is performed</p>
                            <p className="blockdesc">Triggers when somebody performs a specified action</p>
                        </div>
                    </div>
                </div>
                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name="blockelemtype" className="blockelemtype" value="3"/>
                    <div className="grabme">
                    <img src="assets/grabme.svg"/>
                    </div>
                    <div className="blockin">                    
                        <div className="blockico">
                            <span></span>
                            <img src="assets/time.svg"/>
                        </div>
                        <div className="blocktext">
                        <p className="blocktitle">Time has passed</p>
                        <p className="blockdesc">Triggers after a specified amount of time</p>       
                        </div>
                    </div>
                </div>
                <div className="blockelem create-flowy noselect">
                    <input type="hidden" name='blockelemtype' className="blockelemtype" value="4"/>
                    <div className="grabme">
                        <img src="assets/grabme.svg"/>
                    </div>
                    <div className="blockin">
                        <div className="blockico">
                            <span></span>
                            <img src="assets/error.svg"/>
                        </div>
                        <div className="blocktext">
                            <p className="blocktitle">Error prompt</p>
                            <p className="blockdesc">Triggers when a specified error happens</p>
                        </div>
                    </div>
                    </div>
        </>
    )
}

export default BlockListDetails;