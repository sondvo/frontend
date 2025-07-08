import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById('root'))
// React treats lowercase tag names as HTML tags (like <div>, <span>, <main>)
// React treats Capitalized names as custom components (like <MainContent />)


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

root.render(
	<MyApp />
)