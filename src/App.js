import './App.css';

import { AppProvider } from './context/AppContext';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>

            
                <Route path="/*" element={<AppProvider><Home /></AppProvider>} exact />
            
        </Routes>

    
  );
}

export default App;
