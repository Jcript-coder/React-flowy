import closeleft from '../assets/closeleft.svg';

const CloseCard=(props)=>{
    return(
        <>
        <div id={props.id}>
                <img src={closeleft} />
        </div>
        </>
    )
}

export default CloseCard;