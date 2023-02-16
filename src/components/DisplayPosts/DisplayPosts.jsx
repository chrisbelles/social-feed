// import CustomDislike from "../CustomDislike/CustomDislike";
import CustomLike from "../CustomLike/CustomLike";

const DisplayPosts = (props) => {
    return (
      <div className="card">
        <h1>{props.entry.name}</h1>
        <p>{props.entry.comment}</p>
        <div className="feedback-buttons">
          <CustomLike /> 
        </div>
      </div>
    );
}
 
export default DisplayPosts;