
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import './index.css'

const Chat =()=>(
    <>
    <div className="chat-box-container">
    <Link to="/" className="link-cons">
            <IoIosArrowBack  className="arrow" />
  </Link>
        <div className="initial-con">
        <img src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806510/languages-signpost_lmkrbe.jpg" alt="sarvani" className='images-sizes'/>
        
            <h1 className='head'>HyperGoat</h1>
            <p className='bys'>Wilkomen,bienvenue,welcome-I'm Hypergoat ,and i'm fluent in many languages and will help you practice the one</p>
            <p className='bys'>By@xpearhead</p>
        </div>
        <div className="msgs">
        <div className="down-container">
              <img
               src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806510/languages-signpost_lmkrbe.jpg"
               alt="sowmya" className="small-image"/>
               <h1 className="usernames">Hypergoat</h1>
            </div>
            <p className="message" >Wilkomen,bienvenue,welcome-I'm Hypergoat ,and i'm fluent in many languages and will help you practice the one</p>
        </div>
       
    </div>
    </>
)

export default Chat