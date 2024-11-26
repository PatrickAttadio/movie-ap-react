import './App.css';
import { CardContainer } from './components/CardContainer';

function App() {
  return (
    <div>
      <h1>MovieApp</h1>
      {/* Componenti CardContainer per i diversi tipi di contenuto */}
      <CardContainer url="movie/day" section="Trending Movies" />
      <CardContainer url="person/day" section="Trending People"/>
      <CardContainer url="tv/day" section="Trending TV" />
    </div>
  );
}

export default App;