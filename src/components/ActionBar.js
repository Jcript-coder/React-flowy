

const ActionBar=(props)=>{
    const handleClick=()=>{
        console.log("I was clicked")
    }

    return(
        <>
            <div id={props.id} className={props.className} onClick={handleClick}>Actions</div>

        </>
    )
}

export default ActionBar;
