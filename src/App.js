import logo from './logo.svg';
import Canvas from './components/Canvas';
import NavBar from './components/NavBar';
import LeftCard from './components/LeftCard';
import PopWrap from './components/PopWrap';



function App() {
  return (
    <div className="App">
        <NavBar />
        <LeftCard id="leftcard"/>
        <PopWrap />
        <Canvas />
    </div>
  );
}

export default App;
