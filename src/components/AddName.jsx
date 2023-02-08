import React, { useState } from 'react';
import './AddName.css'

const AddName = (props) => {

    const [name, setName] = useState('')
    const [comment, setComment] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name: name,
            comment: comment,
        };
        console.log(newEntry)
        props.addNameEntryProperty(newEntry)
        props.addCommentEntryProperty(newEntry)
    }

    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className='form-group'>
                <div className='input-wrap'>
                    <label className='box-prefix'>Name</label>
                    <input type='name' className="form-control" value={name}onChange={(event) => setName(event.target.value)}/>
                    <label className='box-prefix'>Post</label>
                    <input type='comment' className="form-control" value={comment}onChange={(event) => setComment(event.target.value)}/>
                </div>  
            </div>
            <button type='submit' className="btn btn-primary" style={{'marginTop': '1em'}}>Create</button>
        </form>
     );
}
 
export default AddName;