import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
import Writer from "./components/userTypes/Writer";
import Repositories from "./components/userTypes/Writer/Repositories";
import DisplayByCategory from "./components/userTypes/Writer/DisplayByCategory";
import { AuthProvider } from "./context/AuthContext";
import { NavProvider } from "./context/NavContext";
import { CardProvider } from "./context/CardsContext";
import { BookCardProvider } from "./context/BookCardContext";
import { RepositoryProvider } from "./context/RepositoryContext";
import { AdminProvider } from "./context/AdminContext";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <AuthProvider>
      <RepositoryProvider>
        <AdminProvider>
      <NavProvider>
        <CardProvider>
          <BookCardProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="writer" element={<Writer/>}/>
            <Route path="Categories" element={<DisplayByCategory/>} />
            <Route path="repo" element={<Repositories/>}/>
          </Routes>
          </BookCardProvider>
        </CardProvider>
      </NavProvider>
      </AdminProvider>
      </RepositoryProvider>
    </AuthProvider>
    </Router>
    
  );
}
export default App;
