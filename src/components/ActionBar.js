

const ActionBar=(props)=>{
    console.log(props.isActive)
    return(
        <>
            <div id={props.id} className={props.className}>Actions</div>
        
        </>
    )
}

export default ActionBar;
