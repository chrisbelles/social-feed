
const DisplayEntries = (props) => {
    return (
        <div className="body-container" style={{}}>
            <table className='table'>
                <tbody className="background" style={{ color: 'blue', lineHeight : 10, padding: 20 }}>
                    {props.parentEntries.map((entry, index) => {
                    return (
                        <tr key={index}>
                        <td>{entry.name}</td>
                        <td>{entry.comment}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default DisplayEntries;