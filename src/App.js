import Form from "./components/form/Form"
import Table from "./components/table/Table"
import {useState} from "react"


function App() {
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className="App container mx-auto flex justify-between items-center h-screen">
      <Form  setGender={setGender} setPhone={setPhone} setName={setName} setUserData={setUserData} userData={userData} name={name} phone={phone} gender={gender} />
      <Table />
    </div>
  );
}

export default App;