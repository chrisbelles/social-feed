import CustomDislike from "../CustomDislike/CustomDislike";
import CustomLike from "../CustomLike/CustomLike";


const DisplayPost = (props) => {
    return ( 
        <div>
            <h1>{props.entry.name}</h1>
            <p>{props.entry.comment}</p>
            <CustomDislike /> 
            <CustomLike />
        </div>
     );
}
 
export default DisplayPost;