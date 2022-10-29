import './App.scss';
import Sayt from './Components/Sayt/Sayt';
import Adv from './Components/images/ad_top.jpg'
function App() {
  return (
    <div className="App">
      <img src={Adv} alt="" />
      <Sayt/>
      
    </div>
  );
}

export default App;
