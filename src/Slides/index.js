import { Link } from 'react-router-dom'
import { IoChatbubbleOutline } from "react-icons/io5";
import './index.css'

const Slides = (props) => {
    const {Name,image,by,description,chats} = props 

    return(
        
<Link to="/chat" className="link-con">
    <div className='container'>
    <img src={image} alt={Name} className='image-size'/>
        <div className="discription-container">
            <h1 className='name'>{Name}</h1>
            <p className='by'>{by}</p>
            <p className='discription'>{description}</p>
            <div className="chat-container">
                <IoChatbubbleOutline className="box"/>
                <p className="chat">{chats}k</p>
            </div>

        </div>
    </div>
    </Link>
    
    )


}

export default Slides