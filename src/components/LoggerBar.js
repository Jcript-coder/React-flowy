import BlockList from './BlockList';

const LoggerBar=(props)=>{

    const handleClick=(event)=>{
        console.log("I was clicked")
        console.log(event.target.className="navactive side");
        console.log(event.target.parentElement);
    }
    return(
        <>
            <div id={props.id} className={props.className} onClick={handleClick}>Loggers</div>
        </>
    )
}

export default LoggerBar;