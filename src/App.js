import React, {useState} from 'react';
import DisplayEntries from './components/DisplayEntries/DisplayEntries';
import AddName from './components/AddName'



function App() {

  const [entries, setEntries] = useState([{name: ''}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='border-box'>
          <div className='border-box'>
            <DisplayEntries parentEntries={entries} />
          </div>
          <div className='border-box'>
            <AddName addNewEntryProperty={addNewEntry} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
