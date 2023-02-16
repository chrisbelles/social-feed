import CustomDislike from "../CustomDislike/CustomDislike";
import CustomLike from "../CustomLike/CustomLike";
import "C:/Users/Chris/Desktop/devCodeCamp/social-feed-project2/src/stylesheet.css"

const DisplayPosts = (props) => {
    return (
      <div className="post-wrapper">
        <h1>{props.entry.name}</h1>
        <p>{props.entry.comment}</p>
        <div className="feedback-buttons">
          <CustomLike /> 
          <CustomDislike />
        </div>
      </div>
    );
}
 
export default DisplayPosts;