import './App.css';
import Status from "../Components/Status.tsx";

function App() {

  const isLoggedIn = true; 

  return (
    <div>
      <h1>Lab4 : Conditional Rendering using login check</h1>

      <Status isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
