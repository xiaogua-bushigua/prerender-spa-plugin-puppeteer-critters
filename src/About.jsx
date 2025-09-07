import './About.css';

const About = () => {
	return (
		<div style={{ padding: '2rem', lineHeight: 1.6 }}>
			<h1 className='about'>关于我们</h1>
			<p>
				欢迎来到 <strong>React Demo 应用</strong>！这是一个示例项目，用来展示
				<code> react-router-dom </code> 的用法和 React 的基本功能。
			</p>

			<section style={{ marginTop: '2rem' }}>
				<h2>我们的目标</h2>
				<p>我们希望通过简单直观的界面，帮助开发者快速理解和上手 React 开发，让学习过程更加轻松有趣。</p>
			</section>

			<section style={{ marginTop: '2rem' }}>
				<h2>团队成员</h2>
				<ul>
					<li>👨‍💻 Henry — 前端开发</li>
					<li>🎨 Alice — UI 设计</li>
					<li>🛠 Bob — 后端开发</li>
				</ul>
			</section>

			<section style={{ marginTop: '2rem' }}>
				<h2>联系我们</h2>
				<p>📧 Email: contact@example.com</p>
				<p>🌐 官网: https://example.com</p>
			</section>
		</div>
	);
};

export default About;
