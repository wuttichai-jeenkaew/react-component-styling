import "./App.css";
import { Button } from "./components/Button";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary"/>
        <Button type="secondary"/>
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="error" messages="error"/>
        <Alert type="warning" messages="warning"/>
        <Alert type="info" messages="info"/>
        <Alert type="success" messages="success"/>
      </div>
    </div>
  );
}

export default App;
