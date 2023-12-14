import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom';

// コンポーネント
import Header from "components/Header";
import PostList from "components/PostList";
import Post from "routes/post"

function App() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    (async function () {
      try {
        const fetchData = await fetch("https://1hmfpsvto6.execute-api.ap-northeast-1.amazonaws.com/dev/posts")
        const json = await fetchData.json()
        setPosts(json.posts)
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])

  return (
    <div className="text-gray-800 text-base">
      <Header />
      <Routes>
        <Route path="/" element={<PostList posts={posts} />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
