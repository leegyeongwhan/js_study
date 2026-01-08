import PropsDrillingExample from './components/PropsDrilling';
import ContextApiExample from './components/ContextApiExample';
import StoreExample from './components/StoreExample';

function App() {
  return (
    <div className="app-container">
      <h1>⚛️ React Data Flow Concepts</h1>

      <div className="concept-card">
        <h2>1. The Problem: Props Drilling</h2>
        <p>See how the data (props) has to drill through every layer.</p>
        <PropsDrillingExample />
      </div>

      <div className="concept-card">
        <h2>2. Solution A: Context API</h2>
        <p>Ideally used for: Theme, Auth, Language.</p>
        <ContextApiExample />
      </div>

      <div className="concept-card">
        <h2>3. Solution B: Global Store (Zustand)</h2>
        <p>Ideally used for: Server Data, Complex State.</p>
        <StoreExample />
      </div>
    </div>
  )
}

export default App
