import Form from "./components/form/Form"
import Table from "./components/table/Table"

function App() {
  return (
   <div className="app">
    <div className="mx-auto m-w-screen-lg">
      <div className="h-screen flex justify-center items-center">
        <Form />
        <Table />
      </div>
    </div>
   </div>
  );
}

export default App;