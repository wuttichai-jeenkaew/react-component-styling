import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary"/>
        <Button type="secondary"/>
        {/* Render ตัว Button 2 แบบ */}
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type="err"/>
        <Alert type="war"/>
        <Alert type="info"/>
        <Alert type="success"/>
      </div>
    </div>
  );
}

export default App;
