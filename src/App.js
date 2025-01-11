import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";
import Writer from "./components/userTypes/Writer";
import Repositories from "./components/userTypes/Writer/Repositories";
import DisplayByCategory from "./components/userTypes/Writer/DisplayByCategory";
import WriterDev from "./components/userTypes/Writer/WriterDev";
import Admin from "./components/userTypes/Admin/AdminLayout";
import Bookmarks from "./components/userTypes/Writer/Bookmarks";
import { AuthProvider } from "./context/AuthContext";
import { NavProvider } from "./context/NavContext";
import { CardProvider } from "./context/CardsContext";
import { BookCardProvider } from "./context/BookCardContext";
import { RepositoryProvider } from "./context/RepositoryContext";
import { AdminListProvider } from "./context/AdminListContext";
import { WriterDevProvider } from "./context/WriterDev";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const token = localStorage.getItem('token')

function App() {
  
  return (
    <Router>
    <AuthProvider>
      <RepositoryProvider>
        <WriterDevProvider>
          <AdminListProvider>
      <NavProvider>
        <CardProvider>
          <BookCardProvider>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="writer" element={<Writer/>} />
            <Route path="Categories" element={<DisplayByCategory/>} />
            <Route path="repositories" element={<Repositories/>}/>
            <Route path="WriterDev/:id" element={<WriterDev/>} />
            <Route path='bookmarks' element={<Bookmarks/>} />
            <Route path="adminPanel" element={<Admin/>}/>
          </Routes>
        
          </BookCardProvider>
        </CardProvider>
      </NavProvider>
      </AdminListProvider>
      </WriterDevProvider>
      </RepositoryProvider>
    </AuthProvider>
    </Router>
    
  );
}
export default App;
