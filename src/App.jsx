import Header from './components/Header/Header'
import CoreConcepts from './components/CoreConcepts'
import Examples from './components/Examples';

function App() {
  console.log("Rendering app....");

  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
