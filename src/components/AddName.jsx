import React, { useState } from 'react';
import './AddName.css'

const AddName = (props) => {

    const [name, setName] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
        };
        console.log(newEntry)
        props.addNameEntryProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <label>Enter Name</label>
                <input type='name' className="form-control" value={name}onChange={(event) => setName(event.target.value)}/>  
            </div>
            <button type='submit' className="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
     );
}
 
export default AddName;