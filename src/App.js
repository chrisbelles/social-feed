import React, {useState} from 'react';
import DisplayEntries from './components/DisplayEntries/DisplayEntries';
import AddName from './components/AddName'
import CustomLike from './components/CustomLike/CustomLike';
import CustomDislike from './components/CustomDislike/CustomDislike';


function App() {

  const [entries, setEntries] = useState([{name: 'Chris', comment: 'First! 😂'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntries(tempEntries);
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <h3 style={{margin: '1em'}}>Social
        <small className='text-muted'>Feed</small></h3>
        <div className='border-box align-items-center justify-content-center text-center'>
          <div className='border-box' style={{}}>
            <AddName addNewEntry={addNewEntry} />
          </div>
          <div className='comment-border-box' style={{}}>
            <DisplayEntries parentEntries={entries} />
            <CustomLike />
            <CustomDislike />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
