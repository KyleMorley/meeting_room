import Header from "./components/Header";
import Modal from "./components/Modal";
import List from "./components/List";
import { useState } from "react"


function App() {
  const [lst, setLst] = useState([
    {   
        id: 1,
        time: '8am',
        available: true,
    },
    {
      id: 2,
        time: '9am',
        available: true,
    },
    {
      id: 3,
        time: '10am',
        available: true,
    },
    {
        id: 4,
        time: '11am',
        available: true,
    },
    {
        id: 5,
        time: '12pm',
        available: true,
    },
    {
        id: 6,
        time: '1pm',
        available: true,
    },
    ])

    const [modal, setModal] = useState(false);

    const toggleModal = () => setModal(!modal);

    const bookRoom = (id) => {
      setLst(lst.map((li) => li.id === id ? { ...lst, time: li.time, available: false } : li))
    }

    const reset = () => {
      //setLst(lst.map((li) => li.available === false ? {...lst, id: li.id, time: li.time, available: true} : li ));
      window.location.reload();
    }

  return (
    <div className="App">
      <Header toggleModal={ toggleModal }/>
      {modal ? <Modal toggleModal={toggleModal} reset={ reset }/> : ''}
      <List list={lst} bookRoom={ bookRoom }/>
    </div>
  );
}

export default App;
