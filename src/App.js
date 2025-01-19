                    // Auth
import Login from "./components/Auth/login";
import Signup from "./components/Auth/signup";

                    // Admin
import Admin from "./components/userTypes/Admin/AdminLayout";
import { AdminListProvider } from "./context/AdminListContext";

                    // Writer
import Writer from "./components/userTypes/Writer";
import Repositories from "./components/userTypes/Writer/Repositories";
import DisplayByCategory from "./components/userTypes/Writer/DisplayByCategory";
import WriterDev from "./components/userTypes/Writer/WriterDev";

import Bookmarks from "./components/userTypes/Writer/Bookmarks";
import GutenBook from "./components/shared/GutenBook";
import { GutenBookProvider } from "./context/GutenBookContext";
import { AuthProvider } from "./context/AuthContext";
import { NavProvider } from "./context/NavContext";
import { CardProvider } from "./context/CardsContext";
import { BookCardProvider } from "./context/BookCardContext";
import { RepositoryProvider } from "./context/RepositoryContext";
import { WriterDevProvider } from "./context/WriterDev";
import { UserProvider } from "./context/UserContext";

                    // Reader
import Reader from "./components/userTypes/Reader";
import FanFiction from "./components/userTypes/Reader/FanFiction";
import ReaderBookmarks from "./components/userTypes/Reader/Bookmarks";
import ReaderBooks from "./components/userTypes/Reader/ReaderBooks";
import ReaderRepos from "./components/userTypes/Reader/RepoPage";
import { IntroProvider } from "./context/IntroContext";
import { ReaderRepoProvider } from "./context/ReaderRepositoryContext";
import { ReaderBookmarkProvider } from "./context/ReaderBookmarkContext";
import { TTSProvider } from "./components/utilities/TTS/TtsContext";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const token = localStorage.getItem('token')

function App() {
  
  return (
    <Router>
    <AuthProvider>
      <RepositoryProvider>
        <GutenBookProvider>
          <UserProvider>
          <ReaderBookmarkProvider>
        <WriterDevProvider>
          <IntroProvider>
          <ReaderRepoProvider>
            <TTSProvider>
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
            <Route path="Book" element={<GutenBook/>}/>
            {/* Admin */}
            <Route path="adminPanel" element={<Admin/>}/>
            {/* Reader */}
            <Route path="reader" element={<Reader/>}/>
            <Route path="ReaderDev/:id" element={<FanFiction/>}/>
            <Route path="Readerbookmarks" element={<ReaderBookmarks/>}/>
            <Route path="ReaderBooks" element={<ReaderBooks/>}/>
            <Route path="ReaderRepo" element={<ReaderRepos/>}/>
          </Routes>
        
          </BookCardProvider>
        </CardProvider>
      </NavProvider>
      </AdminListProvider>
      </TTSProvider>
      </ReaderRepoProvider>
      </IntroProvider>
      </WriterDevProvider>
      </ReaderBookmarkProvider>
      </UserProvider>
      </GutenBookProvider>
      </RepositoryProvider>
    </AuthProvider>
    </Router>
    
  );
}
export default App;
