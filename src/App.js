import FixedBottomNavigation from './components/botomNav';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import ActionAreaCard from './components/portfolio';
import { Bio } from './components/bio';


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Bio/>
     <p>Portfolio </p>
     <ActionAreaCard />
     <FixedBottomNavigation />
    </div>
  );
}

export default App;
