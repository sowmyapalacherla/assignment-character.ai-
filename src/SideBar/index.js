import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoIosArrowBack } from "react-icons/io";
import './index.css';


const SideBar =() =>{
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);



  return (
    <>
      {sidebar?  (
        <div className="slidebar">
          <div className="logo-container">
            <h1 className="logo">Character.ai</h1>
            <button className="creating-container" type="button" onClick={showSidebar}>
            <IoIosArrowBack  className="arrow" />
  </button>
  </div>
  <div className="create-container">
  <Link to="/form" className="link-con">
    <button className="creating" type="button" >
                 + Create
            </button>
            </Link>
            <p className="discover">Discover</p>
            </div>
            

            <div className="chat-container">
                <h1 className="chats">Chats</h1>
                <div className="names-container">
                  <div className="single-name-container">
                    <img 
                    src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742572/imogencunninghamofficialsite-imogen-cunningham-anna-freud-psycologist-2-1959_xzmqtt.jpg"
                    alt="sarvani"
                    className="small-image"/>
                    <h1 className="small-name">Swati</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <img 
                    src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932907/Hire-an-Executive-Assistant-Blog-Post-Pic-C-Suite-Assistants-scaled_d3lxez.jpg"
                    alt="sarvani"
                    className="small-image"/>
                    <h1 className="small-name">Arjuna</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <img 
                    src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932468/b8ed22c805e333fe8254e2848876e090_i9eisv.jpg"
                    alt="sarvani"
                    className="small-image"/>
                    <h1 className="small-name">Shiny</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <img 
                    src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712806510/languages-signpost_lmkrbe.jpg"
                    alt="sarvani"
                    className="small-image"/>
                    <h1 className="small-name">HyperGoat</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <img 
                    src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712809972/rising-meditation-silence-reflection-rest-lake-landscape-silence-zen-relaxation-lonely-woman-photo_dluwm3.jpg"
                    alt="sarvani"
                    className="small-image"/>
                    <h1 className="small-name">Marie</h1>
                  </div>
                </div>
                <div className="names-container">
                  <div className="single-name-container">
                    <img 
                    src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712820095/types-of-butterfly-bush-2132429-hero-d32fa22379054a8ca6080843d674a970_dk7deo.jpg"
                    alt="sarvani"
                    className="small-image"/>
                    <h1 className="small-name">Ishan</h1>
                  </div>
                </div>
                

            </div>
            <hr className="line"/>
            <button className="try-ai">Try c.ai</button>
            <div className="down-container">
              <img
               src="https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742642/WLCT_900x900_tvtwcd.jpg"
               alt="sowmya" className="small-image"/>
               <h1 className="username">SowmyaPalacherla</h1>
            </div>
        </div>
      ):(
        <div className='side-container'>
      <button className="create" type="button" onClick={showSidebar}>
      <FaBars className="bars"/>
  </button>
  </div>)}
    </>
  );
}

export default SideBar;