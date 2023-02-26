import Form from "./Form"
import TableResult from "./Table";
import './App.css';
import { minimumDifference } from "./minimumDifference";
function App() {
  return (
    <>
    <div className="App">
      <h2>Ippo Pay Assignment Full Stack Developer</h2>
    </div>
    <div className="row">
      <div className="col-md-12">
        <h3 className="text-danger text-center">Difference between the sums of the arrays </h3>
      </div>
    <Form />
    <TableResult />

    </div>
    </>
  );
}

export default App;
