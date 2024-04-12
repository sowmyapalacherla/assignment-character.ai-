import React, { useState } from "react";
// import { BsPencil } from "react-icons/bs"
// import { FaFileAlt } from "react-icons/fa";
// import { IoMdCreate } from "react-icons/io5";;
// import { CgProfile } from "react-icons/cg";

import './index.css'

const Form =() =>{
    const [user, setUser] = useState({
        charName: "",
        tagLine: "",
        description: "",
        greeting: "",
        voice: "",
      });

    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setUser((prevUser) => ({ ...prevUser, [name]: value }));
            
          };
          return(
            <div className="reg-container">
              <div className="top-nav-cont">
                {/* <BsPencil className="nav-link" /> */}
                <p className="file-name">
                {/* <FaFileAlt className="file-linkk"/> */}
                 View Character Book</p>   
              </div>
                {/* <CgProfile className="profile-link" />
                <IoMdCreate className="file-link"/> */}
                <form className="registration-form" >
                  
                  <label className="label-ele">Character Name </label>
                  <br />
                  <input
                    className="input-box"
                    type="text"
                    name="charName"
                    value={user.charName}
                    onChange={handleChange}
                    placeholder="E.g. Albert Einstein"
                  />
        
                  <br />
                  <label className="label-ele">Tagline</label>
                  <br />
                  <input
                    className="input-box"
                    type="text"
                    name="tagLine"
                    value={user.tagLine}
                    onChange={handleChange}
                    placeholder="Add a short tagline"
                  />
        
                  <br />
                  <label className="label-ele">Description</label>
                  <br />
                  <input
                    className="input-box"
                    type="text"
                    name="description"
                    value={user.description}
                    onChange={handleChange}
                    placeholder="How would your chaarcter describes themeselves?"
                  />
              
                  <br />
                  <label className="label-ele">Greeting</label>
                  <br />
                  <input
                    className="input-box"
                    type="text"
                    name="greeting"
                    value={user.greeting}
                    onChange={handleChange}
                    placeholder="e.g. Helllo im Alber, Ask me anything about my scientific conftribution"
                  />
                
        
                  <br />
                  <label className="label-ele">Voice</label>
                  <br />
                  <input
                    className="input-box"
                    type="password"
                    name="voice"
                    value={user.voice}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                  />
        
                  <br />
                  <button type="submit" className="character-btmn">
                    Add Character
                  </button>
                </form>
            </div>
          );
        };
        
export default Form;
