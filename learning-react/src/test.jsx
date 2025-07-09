// REACT apps are made out of "components"

// A component can be as small as a button,
// or as large as an entire page.

// Nesting components (child components inside parent components)

// REUSABLE!!!

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'))
// React treats lowercase tag names as HTML tags (like <div>, <span>, <main>)
// React treats Capitalized names as custom components (like <MainContent />)

function MyButton() {
	return <button>I'm a button</button>
}

function AboutPage() {
	return (
		<div>
			<h1>About</h1>
			<p>
				Hello there
				<br />
				How do you do?
			</p>
		</div>
	)
}

function MyApp() {
	return (
		<div>
			<h1>Welcome to my app</h1>
			<MyButton />
			<AboutPage />
		</div>
	)
}

const user = {
	'name': 'Son Vo',
	'imageUrl': 'https://i.imgur.com/yXOvdOSs.jpg',
	'imageSize': 90,
}


function Profile() {
	return (
		<div>
			{/* {} for JS code */}
			<h1>{user['name']}</h1>
			<img
				className="avatar"
				src={user['imageUrl']}
				alt="profile pic"
				style={{
					width: user.imageSize,
					height: user.imageSize
				}}
			/>
		</div>
	)
}

function MyButton2() {
	function handleClick() {
		alert('You clicked me!');
	}
	return (
		<button onClick={handleClick}>
			Click me
		</button>
	);
}

root.render(
	<div>
		<Profile />
		<MyButton2 />
	</div>
)