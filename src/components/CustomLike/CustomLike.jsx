import React, {useState} from 'react'
import './CustomLike.css'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Button from '@material-ui/core/Button';

const CustomLike = (props) => {

    const [buttonClass, setButtonClass] = useState('inactive');
    function handleClick(){
        if(buttonClass === 'inactive'){
            setButtonClass('active');
        }
        else{
            setButtonClass('inactive');
        }
    }
        return(
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.message}</button>
            </div>
        )
}

    export default CustomLike