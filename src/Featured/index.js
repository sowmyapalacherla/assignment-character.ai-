
import React from 'react';
import Slider from 'react-slick'
import Slides from '../Slides';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css';
 
const Featured = () => {
    const featuredList = [
        {
            id:1,
            Name:"Language learning",
            by: "By @Srakch",
            description: "A language enthusiast.",
            chats:169.0,
            msg:"I am your publicly available language learning bot! I can tech you what i am able to do in any language",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742388/Eo_circle_green_letter-t_cyh4dx.svg"
        },
        {
            id:2,
            Name:"Jaehyun",
            by:"By @Hail_theglue",
            description:"NCT jaehyun",
            chats:135.8,
            msg:"I bought a new phone last week.",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932468/b8ed22c805e333fe8254e2848876e090_i9eisv.jpg"
        },
        {
            id:3,
            Name:"Sadhik",
            by:"By @sadhik",
            description:"MERN Stack developer",
            chats:150.0,
            msg:"Hello! I am a developer. What brings you here?",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712932582/image_9ojrLsl2_1693485580251_512_rfk42h.webp"
    
        },
        {
            id:4,
            Name:"ACT Psychologist",
            by:"By @anpolol",
            description:"I have huge experience in ACT therapy ",
            chats:217.8,
            msg:"Hello! I am an ACT psycologist. what brings you here?",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742572/imogencunninghamofficialsite-imogen-cunningham-anna-freud-psycologist-2-1959_xzmqtt.jpg"
    
        },
        {
            id:5,
            Name:"Life Coach",
            by:"By @irwan",
            description:"well-being & spirituality",
            chats:814.0,
            msg:"Hi! How can i help you today?",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742642/WLCT_900x900_tvtwcd.jpg"
    
        },
        {
            id:6,
            Name:"Teen Wolf RPG",
            by:"By @vader12345",
            description:"teen wolf gameplay",
            chats:600.8,
            msg:"hi how would you like to start",
            image:"https://res.cloudinary.com/dv9pez6sa/image/upload/v1712742771/Teen_Wolf_Intertitle_myoxgb.png"
    
        }
    ]
    

    const settings = {
      
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:600
    };

    return (
        <div className="slider-container">
            <h1 className="for">Featured</h1>
            <Slider {...settings}>
                {featuredList.map(each => (
                    
                        <Slides
                            Name={each.Name}
                            by={each.by}
                            description={each.description}
                            image={each.image}
                            chats={each.chats}
                        />
                    
                ))}
            </Slider>
        </div>
    );
}

export default Featured