import { Routes, Route } from 'react-router-dom';

// コンポーネント
import Header from "components/Header";
import PostList from "components/PostList";
import Post from "routes/post"
import Contact from 'routes/contact';

function App() {
  return (
    <div className="text-gray-800 text-base">
      <Header />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
