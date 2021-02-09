

const LeftCard =()=>{
    return(
        <>
           <div id="leftcard">
                <div id="closecard">
                    <img src="assets/closeleft.svg"/>
                </div>
                <p id="header">Blocks</p>
                <div id="search">
                    <img src="assets/search.svg"/>
                    <input type="text" placeholder="Search blocks"/>
                </div>
                <div id="subnav">
                    <div id="triggers" class="navactive side">Triggers</div>
                    <div id="actions" class="navdisabled side">Actions</div>
                    <div id="loggers" class="navdisabled side">Loggers</div>
                </div>
                <div id="blocklist">
                    <div class="blockelem create-flowy noselect">
                        <input type="hidden" name='blockelemtype' class="blockelemtype" value="1"/>
                        <div class="grabme">
                            <img src="assets/grabme.svg"/>
                        </div>
                        <div class="blocktext">
                            <p class="blocktitle">New visitor</p>
                            <p class="blockdesc">Triggers when somebody visits a specified page</p>
                        </div>
                    </div>
                    <div class="blockelem create-flowy noselect">
                        <input type="hidden" name='blockelemtype' class="blockelemtype" value="2"/>
                        <div class="grabme">
                            <img src="assets/grabme.svg"/>
                        </div>
                    </div>
                    <div class="blockin">
                        <div class="blockico">
                            <span></span>
                            <img src="assets/action.svg"/>
                        </div>
                        <div class="blocktext">
                            <p class="blocktitle">Action is performed</p>
                            <p class="blockdesc">Triggers when somebody performs a specified action</p>
                         </div>
                    </div>
                </div>
            </div>
        </>
    )
}