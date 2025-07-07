import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'))

// React treats lowercase tag names as HTML tags (like <div>, <span>, <main>)
// React treats Capitalized names as custom components (like <MainContent />)

function MainContent() {
	return <h1>React is great!</h1>
}

	// This might work. But it's not the React way!!!
	// Use div instead
// root.render(
// 	MainContent()
// )

root.render(
	<div>
		{/* call the function */}
		<MainContent />
	</div>
)

// or
root.render(
	<MainContent />
)