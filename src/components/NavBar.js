import LeftSide from './LeftSide';
import CenterNav from './CenterNav';
import RightNav from './RightNav';


const NavBar=()=>{
    return(
        <>
        <div id="navigation">
            <LeftSide />
            <CenterNav />
            <RightNav />
    </div>
        </>
    )
}

export default NavBar;