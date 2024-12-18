import Login from "./components/login";
import Signup from "./components/signup";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
