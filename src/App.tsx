import { Button } from "./components/ui/button"

function App() {
  // This is a simple React component that renders a welcome message.
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Pharmaprev</h1>
      <p>This is a simple React application.</p>
      <p className="mb-4">Feel free to modify it as you like!</p>
      <Button>Enjoy coding!</Button>
    </div>
  )
}

export default App
