import './App.css';
import { AppRouter } from './appRouter'
import { setSessionData, getData} from './sessionUtils'
import {GLOBAL_URL, createLoader} from './global_url';

function App() {

  return (
    <div>
      <AppRouter/>
    </div>
  );
}

export default App;
