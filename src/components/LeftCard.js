import BlockList from './BlockList';
import CloseCard from './CloseCard';
import SearchBar from './SearchBar';


import SubNav from './SubNav'
const LeftCard =(props)=>{
    return(
        <>
        <div id={props.id}>
            <CloseCard id="closecard"/>
            <p id="header">Blocks</p>
            <SearchBar />
            <SubNav />
            <BlockList />
            
        </div>

        </>
    )
}
export default LeftCard;