
const DisplayEntries = (props) => {
    return ( 
        <table className='table'>
            <thead>
            <tr>
                <th>Social Feed</th>
                <th>Name</th>
                <th>Comment</th>
            </tr>
            </thead>
            <tbody>
                {props.parentEntries.map((entry, index) => {
                return (
                    <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.comment}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
     );
}
 
export default DisplayEntries;