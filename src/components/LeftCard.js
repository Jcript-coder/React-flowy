import BlockList from './BlockList';
import CloseCard from './CloseCard';
import SearchBar from './SearchBar';


import SubNav from './SubNav'
const LeftCard =()=>{
    return(
        <>
        <div id="leftcard">
            <CloseCard/>
            <p id="header">Blocks</p>
            <SearchBar />
            <SubNav />
            <BlockList />
            
        </div>

        </>
    )
}
export default LeftCard;