import { Suspense } from "react"
import { Routes, Route } from 'react-router-dom';

// コンポーネント
import Header from "components/Header";
import PostList from "components/PostList";
import Post from "routes/post"
import Loading from "components/Loading";

function App() {

  return (
    <div className="text-gray-800 text-base">
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<Post />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
