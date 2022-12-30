import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './pages/Home/Home';


function App() {
  return (
    <div>
      <Home></Home>
      <Toaster />
    </div>
  );
}

export default App;