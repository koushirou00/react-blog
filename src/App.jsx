import { Routes, Route } from 'react-router-dom';

// 記事データ
import { posts } from "data/posts"

// コンポーネント
import Header from "components/Header";
import PostList from "components/PostList";
import Post from "routes/post"

function App() {
  return (
    <div className="text-gray-800 text-base">
      <Header />
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/posts/:id" element={<Post posts={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
