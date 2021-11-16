import FloorPlan from './FloorPlan'
import './App.css';

function App() {
  return (
  <>
  <FloorPlan
    bedroom="Bedroom 1"
    kitchen={ 
      <>
      <p>Kitchen</p>
      <div id="oven">
        <p>Oven</p>
      </div>
      <div id="sink">
        <p>Sink</p>
      </div>
      </>
    }
    fullBath='Full Bath'
    bedroom2='Bedroom 2'
    livingRoom='Living Room'
    halfBath='Half Bath'
    bedroom3='Bedroom 3'
  />
  </>
  );
}

export default App;
