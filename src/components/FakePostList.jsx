import { useState, useEffect } from 'react';
import axios from 'axios';

const FakePostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState('all');

  const fetchPosts = () => {
    setLoading(true);
    axios.get('https://dummyjson.com/posts')
      .then(response => {
        setPosts(response.data.posts);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const uniqueUserIds = [...new Set(posts.map(post => post.userId))];
  const filteredPosts = selectedUserId === 'all' ? posts : posts.filter(post => post.userId === parseInt(selectedUserId));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Fake API Posts</h2>
      <button onClick={fetchPosts}>Refresh</button>
      <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
        <option value="all">All Users</option>
        {uniqueUserIds.map(id => (
          <option key={id} value={id}>User {id}</option>
        ))}
      </select>
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FakePostList;