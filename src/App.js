import './App.css';
import Home from './Home';
import About from './About';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
		<div>
			<nav>
				<Link to="/">首页</Link> | <Link to="/about">关于</Link>
			</nav>

			{/* 路由配置 */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</div>
  );
}

export default App;
