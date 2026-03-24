import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>News Portal Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/local-users">Local Users</Link></li>
          <li><Link to="/users-api">Users API</Link></li>
          <li><Link to="/fake-posts">Fake API Posts</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;