import FixedBottomNavigation from './components/botomNav';
import './App.css';
import ResponsiveAppBar from './components/navbar';
import ActionAreaCard from './components/projectCards';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
     <p>Portfolio </p>
     <ActionAreaCard />
     <FixedBottomNavigation />
    </div>
  );
}

export default App;
