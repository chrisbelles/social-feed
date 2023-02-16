import React, {useState} from 'react';
import DisplayEntries from './components/DisplayEntries/DisplayEntries';
import AddName from './components/AddName'


function App() {
  const [entries, setEntries] = useState([
    { name: "Chris", comment: "First! 😂" },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid" style={{background: "teal"}}>
      <header style={{background: "white",height: '6rem'}}>
        <h4>
          Social
          <small className="text-muted">Feed</small>
        </h4>
      </header>
      <div>
        <body className="bg-teal">
          <div className="border-box align-items-center justify-content-center text-center">
            <div className="card mx-auto my-5" style={{maxWidth: '65%', }}>
              <AddName addNewEntry={addNewEntry} />
            </div>
            <div className="mx-auto my-5" style={{maxWidth: '65%'}}>
              <DisplayEntries parentEntries={entries} />
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}

export default App;