import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="success" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert text="error" />
        <Alert text="warning" />
        <Alert text="info" />
        <Alert text="success" />
      </div>
    </div>
  );
}

export default App;
