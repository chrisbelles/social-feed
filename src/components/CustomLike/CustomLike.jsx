import React, {useState} from 'react'
import './CustomLike.css'

function CustomLike(){
    const [like,setlike] = useState(false)
    const [dislike,setdislike] = useState(false)

    function likef(){
        if(like){
            setlike(false)
        }else{
            setlike(true)
            if(dislike){
                setdislike(false)
            }
        }
    }

    function dislikef(){
        if(dislike){
            setdislike(false)
        }else{
            setdislike(true)
            if(like){
                setlike(false)
            }
        }
    }

    return(
        <div className='CustomLike'>
        <button onClick={dislikef} className={[dislike? 'active-dislike': 'button']}> Dislike </button>
        <button onClick={likef} className={[like? 'active-like': 'button']}> Like </button>
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