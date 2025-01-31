import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <div>Hello, Samuel Ampah</div>
      <Button variant="danger">Click Me</Button>

      <div className="row">
        <div className="col col-md-2">Column 1</div>
        <div className="col col-md-6">Column 2</div>
      </div>
    </>
  );
}

export default App;
