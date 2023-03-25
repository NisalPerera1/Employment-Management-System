import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/index';
import Create from './components/create.js';
import EditEmployee from './components/edit';
<head>
  
</head>
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<EditEmployee />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
