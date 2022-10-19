import FixedBottomNavigation from './components/botomNav';
import './App.css';
import ResponsiveAppBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
     <p>Portfolio </p>
     <FixedBottomNavigation />
    </div>
  );
}

export default App;
