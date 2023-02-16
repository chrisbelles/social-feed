import React, {useState} from 'react'
import './CustomLike.css'

function CustomLike(){
    const [likeactive,setlikeactive] = useState(false)
    const [dislikeactive,setdislikeactive] = useState(false)

    function likef(){
        if(likeactive){
            setlikeactive(false)
        }else{
            setlikeactive(true)
            if(dislikeactive){
                setdislikeactive(false)
            }
        }
    }

    function dislikef(){
        if(dislikeactive){
            setdislikeactive(false)
        }else{
            setdislikeactive(true)
            if(likeactive){
                setlikeactive(false)
            }
        }
    }

    return(
        <div className='CustomLike'>
        <button onClick={likef} className={[likeactive? 'active-like': 'button']}> Like </button>
        <button onClick={dislikef} className={[dislikeactive? 'active-dislike': 'button']}> Dislike </button>
        </div>
    );
}


// const CustomLike = (props) => {

//     const [buttonClass, setButtonClass] = useState('inactive');
//     function handleClick(){
//         if(buttonClass === 'inactive'){
//             setButtonClass('active');
//         }
//         else{
//             setButtonClass('inactive');
//         }
//     }
//         return(
//             <div>
//                 <button className={buttonClass} onClick={handleClick}>{props.message}</button>
//             </div>
//         )
// }

    export default CustomLike