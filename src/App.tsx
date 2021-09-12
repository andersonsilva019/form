import { StepFormContextProvider } from './context/StepForm';
import Home from './pages/Home';
import './styles/global.css'

function App() {

  return (
    <StepFormContextProvider>
      <Home />
    </StepFormContextProvider>
  );
}

export default App;
