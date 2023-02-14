import "../AddName";
import DisplayPosts from "../DisplayPosts/DisplayPosts";

//Parent Mapper
const DisplayEntries = (props) => {
    return (
        <div className="body-container" style={{}}>
            {props.parentEntries.map((entry,index) => {
                return(
                    <DisplayPosts entry={entry} key={index} />
                )
            })}
        </div>
     );
}
 
export default DisplayEntries;