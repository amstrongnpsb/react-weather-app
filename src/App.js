import './App.css';
import Search from './components/search';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App bg-sky-900 w-3/5 h-min pt-5 pb-5 m-auto mt-20 rounded-2xl">
    <Search/>
    <Weather/>
    </div>
  );
}

export default App;
