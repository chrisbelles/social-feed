import React, { useState } from 'react';
import './AddName.css'

const styles = {
    label:  {
        float: 'left'
    
    },
    nameInput: {
        marginLeft : '10%',
        width : '60%'
    },
    postInput: {
        marginLeft : '10%',
        width : '60%',

    },
}

const AddName = (props) => {

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            comment: comment,
        };
        console.log(newEntry)
        props.addNewEntry(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group' style={{padding: '2em'}}>
                <label className="text-muted" style={styles.label}>Name</label>
                <input type='name' className="form-control" style={styles.nameInput} value={name}onChange={(event) => setName(event.target.value)}/>
                <br></br>
                <label className="text-muted" style={styles.label}>Post</label>
                <textarea rows="5" cols="80" type='comment' className="form-control" style={styles.postInput}value={comment}onChange={(event) => setComment(event.target.value)}/>
            </div>
            <button type='submit' className="btn btn-primary" style={{'marginTop':'1em',float:"right",'border-radius': '20px'}}>Create</button>
        </form>

     );
}
 
export default AddName;